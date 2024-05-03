import React, { useState, useReducer } from 'react';
import { RootState } from '@/app/store';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityType } from '@/types/@types.articles';
import { updateActivity } from '@/features/Activities/Activities.Slice';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import ActivityTextField from '@/features/Activities/Activity/ActivityFields/ActivityTextField';
import ActivityAction from '@/features/Activities/Activity/ActivityAction';

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
      if (response.hasOwnProperty('data')) {
        dispatch(updateActivity([newActivity]));
        setEditMode(!editMode);
      } else {
        alert('error editing activities');
      }
    });
  };

  const handleFieldChangeReducer = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const updatedObject = { [field]: e.target.value };
    transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
  };

  return (
    <Grid item className="w-full flex flex-col p-3 mb-2 border-2 border-white rounded-lg border-solid">
      <Grid item>
        <ActivityTextField
          editMode={editMode}
          variant="h1"
          type="text"
          name="title"
          value={title}
          updatedValue={updatedFields.title}
          Label="Title"
          handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'title')}
        />
        <Grid container>
          <Grid item className="mr-4">
            <ActivityTextField
              editMode={editMode}
              variant="body1"
              type="text"
              name="category"
              value={category}
              updatedValue={updatedFields.category}
              Label="Category"
              handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'category')}
            />
          </Grid>
          <Grid item>
            <ActivityTextField
              editMode={editMode}
              variant="body1"
              type="text"
              name="date"
              value={date}
              updatedValue={updatedFields.date}
              Label="Date/Time"
              handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'date')}
            />
          </Grid>
        </Grid>
        <Grid container className="w-full">
          <ActivityTextField
            editMode={editMode}
            variant="body1"
            type="text"
            name="city"
            value={city}
            updatedValue={updatedFields.city}
            Label="City"
            handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'city')}
          />
          <Grid item className="w-full">
            <ActivityTextField
              editMode={editMode}
              variant="body1"
              type="text"
              name="venue"
              value={venue}
              updatedValue={updatedFields.venue}
              Label="Venue"
              handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'venue')}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className="w-full">
            <ActivityTextField
              editMode={editMode}
              variant="body1"
              type="textarea"
              rows={5}
              name="description"
              value={description}
              updatedValue={updatedFields.description}
              Label="Description"
              handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'description')}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="w-full flex justify-end m-2">
        {editMode ? (
          <Box>
            <ButtonComponent className="mr-4" id="save-changes" variant="outlined" color="success" onClick={() => handleFinalActivityEdit(id)}>
              Save Changes
            </ButtonComponent>
            <ButtonComponent className="mr-4" id="cancel" variant="outlined" color="primary" onClick={() => setEditMode(false)}>
              Cancel
            </ButtonComponent>
          </Box>
        ) : (
          <ButtonComponent className="mr-4" id="edit-activity" variant="outlined" color="primary" onClick={() => handlePreActivityEdit(id)}>
            Edit Activity
          </ButtonComponent>
        )}
        <ActivityAction id="delete-activity" action="delete" className="mr-4" label="Delete Activity" variant="outlined" color="warning" onClick={() => handleActivityDelete(id)} />
      </Grid>
    </Grid>
  );
};

export default Activity;
