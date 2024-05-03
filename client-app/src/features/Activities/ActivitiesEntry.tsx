import React, { useEffect, useMemo } from 'react';
import { axiosGet, axiosDelete, axiosEdit, axiosCreate } from '@/utils/axios-utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setActivities, setFilterText, setSortKey, setSortOrder } from './Activities.Slice';
import Activities from './Activities/Activities';
import { ActivityType } from '@/types/@types.articles';

export default function ActivitiesEntry () {
  const dispatch = useDispatch();
  const activities = useSelector((state: RootState) => state.activities);
  const filterText = useSelector((state: RootState) => state.activitiesFilterSort.filterText);
  const sortKey = useSelector((state: RootState) => state.activitiesFilterSort.sortKey);
  const sortOrder = useSelector((state: RootState) => state.activitiesFilterSort.sortOrder);

  useEffect(() => {
    const abortController = new AbortController();
    axiosGet(`http://localhost:5000/api/activities`, abortController.signal).then((response) => {
      if (response?.data) {
        dispatch(setActivities(response.data));
        // setFilteredData(response.data);
      } else {
        alert('error getting activities');
      }
    });
    return () => {
      // cancel the request before component unmounts
      abortController.abort();
    };
  }, [dispatch]);

  const filteredDataMemo = useMemo(() => {
    return activities.filter((item) => item.title.toLowerCase().includes(filterText.toLowerCase()));
  }, [activities, filterText]);

  const sortedData = useMemo(() => {
    if (sortKey) {
      return filteredDataMemo.slice().sort((a: any, b: any) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        if (sortOrder === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    } else {
      return filteredDataMemo;
    }
  }, [filteredDataMemo, sortKey, sortOrder]);

  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterText(event.target.value));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortKey(event.target.value));
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(event.target.value as 'asc' | 'desc'));
  };

  const handleActivityDelete = async (id : string) => {
    return await axiosDelete(`http://localhost:5000/api/activities/${id}`).then((response) => {
      return response;
    });
  }

  const handleActivityEdit = async (id: string, activity: ActivityType) => {
    return await axiosEdit(`http://localhost:5000/api/activities/${id}`, activity).then((response) => {
      return response;
    });
  }

  const handleActivityCreate = async (activity: ActivityType) => {
    return await axiosCreate(`http://localhost:5000/api/activities/`, activity).then((response) => {
      return response;
    });
  }

  return (
    <>
      {sortedData && (
        <Activities
          sortedData={sortedData}
          filterText={filterText}
          sortKey={sortKey}
          sortOrder={sortOrder}
          handleFilterTextChange={handleFilterTextChange}
          handleSortChange={handleSortChange}
          handleSortOrderChange={handleSortOrderChange}
          handleActivityDelete={handleActivityDelete}
          handleActivityEdit={handleActivityEdit}
          handleActivityCreate={handleActivityCreate}
        />
      )}
    </>
  );
};