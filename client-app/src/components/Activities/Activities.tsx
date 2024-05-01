import React, { useEffect, useMemo } from 'react';
import { ActivityType } from '@/types/@types.articles';
import { axiosGet } from '@/utils/axios-utils';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setActivities, setFilterText, setSortKey, setSortOrder } from './Activities.Slice';
import Activity from '@/components/Activities/Activity/Activity';
import { Grid } from '@mui/material';

export const Articles = () => {
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
        console.log(`api/activities response`, response);
        alert('error fetching api/activities');
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
    console.log(event.target.value);
    dispatch(setFilterText(event.target.value));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortKey(event.target.value));
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(event.target.value as 'asc' | 'desc'));
  };

  return (
    <div>
      <Grid container className='flex flex-row'>
        <Grid item>
        <label htmlFor="filterText">Filter:</label>
        <input id="filterText" type="text" value={filterText} onChange={handleFilterTextChange} />
        </Grid>
        <Grid item>
        <label htmlFor="sortKey">Sort by:</label>
        <select id="sortKey" value={sortKey || ''} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="date">Date</option>
          <option value="venue">Venue</option>
          <option value="city">City</option>
          <option value="category">category</option>
        </select>
        </Grid>
        <Grid item>
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        </Grid>
      </Grid>
      <ul>
        {sortedData?.map((activity: ActivityType) => (
          <Activity
            key={activity.id}
            id={activity.id}
            title={activity.title}
            date={activity.date}
            description={activity.description}
            category={activity.category}
            city={activity.city}
            venue={activity.venue}
          />
        ))}
      </ul>
    </div>
  );
};
