import React, { useState, useReducer } from 'react';
import { RootState } from '@/app/store';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityType } from '@/types/@types.articles';
import { updateActivity } from '../Activities.Slice';
import TextFieldComponent from '@/components/FieldComponent/TextFieldComponent/TextFieldComponent';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';

type Props = {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
  handleActivityDelete: (id: string) => void;
  handleActivityEdit: (id: string, activity: ActivityType) => Promise<any>;
};

const reducer = (state: any, action: any) => {
  console.log('state, action.payload', state, action.payload);
  switch (action.type) {
    case 'UPDATE_OBJECT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Activity = ({ id, title, date, description, category, city, venue, handleActivityDelete, handleActivityEdit }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [updatedFields, transmit] = useReducer(reducer, {
    id: id,
    title: title,
    date: date,
    description: description,
    category: category,
    city: city,
    venue: venue,
  });
  const dispatch = useDispatch();
  const activities = useSelector((state: RootState) => state.activities);

  const handlePreActivityEdit = async (id: string) => {
    setEditMode(!editMode);
  };

  const handleFinalActivityEdit = async (id: string) => {
    const activity = activities.filter((activity) => activity.id === id);
    const newActivity: ActivityType = { ...activity[0], ...updatedFields };

    handleActivityEdit(id, newActivity).then((response: any) => {
      console.log('res', response);
      if (response.hasOwnProperty('data')) {
        dispatch(dispatch(updateActivity([newActivity])));
        setEditMode(!editMode);
      } else {
        alert('something is wrong making the edit call');
      }
    });
  };

  return (
    <Grid item className="w-full flex flex-col p-3 mb-2 border-2 border-white rounded-lg border-solid">
      <Grid item>
        {editMode ? (
          <TextFieldComponent
            autoComplete="off"
            className=""
            id="activity-title"
            ariaLabel="Title"
            name="title"
            value={updatedFields.title}
            type="text"
            color="primary"
            label="Title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const updatedObject = { title: e.target.value };
              transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
            }}
          />
        ) : (
          <Typography className="" color="primary" variant="h3">
            {title}
          </Typography>
        )}
        <Grid container>
          <Grid item className="mr-4">
            {editMode ? (
              <TextFieldComponent
                autoComplete="off"
                className=""
                id="activity-category"
                ariaLabel="Category"
                name="category"
                value={updatedFields.category}
                type="text"
                color="primary"
                label="Category"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const updatedObject = { category: e.target.value };
                  transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
                }}
              />
            ) : (
              <Typography className="mr-2" color="primary" variant="body1">
                Category: {category}
              </Typography>
            )}
          </Grid>
          <Grid item>
            {editMode ? (
              <TextFieldComponent
                autoComplete="off"
                className=""
                id="activity-date"
                ariaLabel="Date"
                name="date"
                value={updatedFields.date}
                type="text"
                color="primary"
                label="Date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const updatedObject = { date: e.target.value };
                  transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
                }}
              />
            ) : (
              <Typography className="mr-2" color="primary" variant="body1">
                Date/Time: {date}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container className="w-full">
          {editMode ? (
            <TextFieldComponent
              autoComplete="off"
              className=""
              id="activity-city"
              ariaLabel="City"
              name="city"
              value={updatedFields.city}
              type="text"
              color="primary"
              label="City"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const updatedObject = { city: e.target.value };
                transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
              }}
            />
          ) : (
            <Typography className="mr-2" color="primary" variant="body1">
              City: {city}
            </Typography>
          )}
          <Grid item className="w-full">
            {editMode ? (
              <TextFieldComponent
                autoComplete="off"
                className=""
                id="activity-venue"
                ariaLabel="Venue"
                name="venue"
                value={updatedFields.venue}
                type="text"
                color="primary"
                label="Venue"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const updatedObject = { venue: e.target.value };
                  transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
                }}
              />
            ) : (
              <Typography className="mr-2" color="primary" variant="body1">
                Venue: {venue}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className="w-full">
            {editMode ? (
              <TextFieldComponent
                autoComplete="off"
                className=""
                id="activity-description"
                ariaLabel="Description"
                name="description"
                value={updatedFields.description}
                type="text"
                color="primary"
                label="Description"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const updatedObject = { description: e.target.value };
                  transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
                }}
              />
            ) : (
              <Typography className="mr-2" color="primary" variant="body1">
                {description}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="w-full flex justify-end m-2">
        {editMode ? (
          <Box>
            <ButtonComponent className="mr-4" id="Save Changes" variant="outlined" color="success" onClick={() => handleFinalActivityEdit(id)}>
              Save Changes
            </ButtonComponent>
            <ButtonComponent className="mr-4" id="Cancel" variant="outlined" color="primary" onClick={() => setEditMode(false)}>
              Cancel
            </ButtonComponent>
          </Box>
        ) : (
          <ButtonComponent className="mr-4" variant="outlined" color="primary" id="Edit Activity" onClick={() => handlePreActivityEdit(id)}>
            Edit Activity
          </ButtonComponent>
        )}
        <ButtonComponent className="mr-4" id="Delete Activity" variant="outlined" color="warning" onClick={() => handleActivityDelete(id)}>
          Delete Activity
        </ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default Activity;
