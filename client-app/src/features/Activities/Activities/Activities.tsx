import React from 'react';
import { ActivityType } from '@/types/@types.articles';
import Activity from '@/features/Activities/Activity/Activity';
import { Grid, Box } from '@mui/material';
import TextFieldComponent from '@/components/FieldComponent/TextFieldComponent/TextFieldComponent';
import SelectComponent from '@/components/FieldComponent/SelectComponent/SelectComponent';
import ActivityCreate from '@/features/Activities/Activity/ActivityCreate/ActivityCreate';
import {AxiosResponse} from 'axios';

type Props = {
  sortedData: ActivityType[];
  filterText: string;
  sortKey: string | null;
  sortOrder: string;
  handleFilterTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSortOrderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleActivityDelete: (id: string) => Promise<AxiosResponse>;
  handleActivityEdit: (id: string, activity: ActivityType) => Promise<AxiosResponse>;
  handleActivityCreate: (activity: ActivityType) => Promise<AxiosResponse>;
};

export default function Activities({
  sortedData,
  filterText,
  sortKey,
  sortOrder,
  handleFilterTextChange,
  handleSortChange,
  handleSortOrderChange,
  handleActivityDelete,
  handleActivityEdit,
  handleActivityCreate
}: Props) {
  return (
    <Box className="max-w-4xl m-auto">
      <Grid container className="w-full flex flex-row items-center m-4">
        <Grid item className='mr-4 min-w-48'>
          <TextFieldComponent
            autoComplete="off"
            className="class-name"
            id="filter-activity"
            ariaLabel="Search"
            name="search"
            value={filterText}
            type="text"
            color="primary"
            label="Search"
            onChange={handleFilterTextChange}
          />
        </Grid>
        <Grid item className='mr-4 min-w-48'>
          <SelectComponent
            id="sort-key-activities"
            label="Sort by"
            value={sortKey || ''}
            ariaLabel="Sort by"
            onChange={handleSortChange}
            hasError={false}
            options={[
              { value: '', text: 'None' },
              { value: 'title', text: 'Title' },
              { value: 'description', text: 'Description' },
              { value: 'date', text: 'Date' },
              { value: 'venue', text: 'Venue' },
              { value: 'city', text: 'City' },
              { value: 'category', text: 'Category' },
            ]}
          />
        </Grid>
        <Grid item className='min-w-48'>
          <SelectComponent
            id="sort-activities"
            label="Sort Order"
            value={sortOrder}
            ariaLabel="Sort Order"
            onChange={handleSortOrderChange}
            hasError={false}
            options={[
              { value: 'asc', text: 'Ascending' },
              { value: 'desc', text: 'Descending' },
            ]}
          />
        </Grid>
        <Grid item className='flex ml-auto'>
            <ActivityCreate handleActivityCreate={handleActivityCreate}/>
        </Grid>
      </Grid>
      <Grid container className="w-full flex flex-col">
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
            handleActivityDelete={handleActivityDelete}
            handleActivityEdit={handleActivityEdit}
          />
        ))}
      </Grid>
    </Box>
  );
}
