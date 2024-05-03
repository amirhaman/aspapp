import React, { useState, useReducer } from 'react';
import { ActivityType } from '@/types/@types.articles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { Box, Grid, Modal, Typography } from '@mui/material';
import { setActivities, setFilterText, setSortKey, setSortOrder } from '@/features/Activities/Activities.Slice';
import ActivityTextField from '@/features/Activities/Activity/ActivityFields/ActivityTextField';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import ModalComponent from '@/components/ModalComponent.tsx/ModalComponent';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  handleActivityCreate: (activity: ActivityType) => Promise<any>;
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

const initialState = {
  id: '',
  title: '',
  date: '',
  description: '',
  category: '',
  city: '',
  venue: '',
}

export const ActivityCreate = ({ handleActivityCreate }: Props) => {
  const dispatch = useDispatch();
  const activities = useSelector((state: RootState) => state.activities);
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const [updatedFields, transmit] = useReducer(reducer, initialState);

  const handleFieldChangeReducer = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const updatedObject = { [field]: e.target.value };
    transmit({ type: 'UPDATE_OBJECT', payload: updatedObject });
  };

  const handleFinalActivityCreate = () => {
    handleActivityCreate(updatedFields).then((response: any) => {
      if (response.hasOwnProperty('data')) {
        resetForm();
        setCreateModalStatus(false);
        dispatch(setActivities([...activities, updatedFields]));
      } else {
        alert('something is wrong creating the activity');
      }
    })
  }

  const resetForm = () => {
    const newActivity = { id: Math.floor(new Date().getTime() / 1000) + "-" + uuidv4() };
    transmit({ type: 'UPDATE_OBJECT', payload: newActivity });
  }

  const handleOpen = () => {
    resetForm();
    setCreateModalStatus(true)
  }

  const handleClose = () => {
    console.log("initialState", initialState)
    transmit({ type: 'UPDATE_OBJECT', payload: initialState })
    setCreateModalStatus(false)
  }

  return (
    <Box className="max-w-4xl m-auto">
      <ButtonComponent className="mr-4" id="create-activity" variant="outlined" color="success" onClick={handleOpen}>
        Create Activity
      </ButtonComponent>
      <ModalComponent open={createModalStatus} onClose={handleClose} ariaLabelledBy="modal-activity-confirm-action" ariaDescribedBy="modal-activity-confirm-action">
        <Grid item className="flex flex-col p-3 mb-2 border-2 border-white rounded-lg border-solid">
          <Grid item className='max-w-4xl m-auto'>
            <ActivityTextField
              editMode={true}
              variant="h1"
              type="text"
              name="title"
              value={updatedFields.title}
              updatedValue={updatedFields.title}
              Label="Title"
              handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'title')}
            />
            <Grid container>
              <Grid item className="mr-4">
                <ActivityTextField
                  editMode={true}
                  variant="body1"
                  type="text"
                  name="category"
                  value={updatedFields.category}
                  updatedValue={updatedFields.category}
                  Label="Category"
                  handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'category')}
                />
              </Grid>
              <Grid item>
                <ActivityTextField
                  editMode={true}
                  variant="body1"
                  type="text"
                  name="date"
                  value={updatedFields.date}
                  updatedValue={updatedFields.date}
                  Label="Date/Time"
                  handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'date')}
                />
              </Grid>
            </Grid>
            <Grid container className="w-full">
              <ActivityTextField
                editMode={true}
                variant="body1"
                type="text"
                name="city"
                value={updatedFields.city}
                updatedValue={updatedFields.city}
                Label="City"
                handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'city')}
              />
              <Grid item className="w-full">
                <ActivityTextField
                  editMode={true}
                  variant="body1"
                  type="text"
                  name="venue"
                  value={updatedFields.venue}
                  updatedValue={updatedFields.venue}
                  Label="Venue"
                  handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'venue')}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item className="w-full">
                <ActivityTextField
                  editMode={true}
                  variant="body1"
                  type="textarea"
                  rows={5}
                  name="description"
                  value={updatedFields.description}
                  updatedValue={updatedFields.description}
                  Label="Description"
                  handleFieldChangeReducer={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, 'description')}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="w-full flex justify-end m-2">
            <ButtonComponent className="mr-4" id="create-activity" variant="outlined" color="success" onClick={handleFinalActivityCreate}>
              Create Activity
            </ButtonComponent>
            <ButtonComponent className="mr-4" id="cancel-activity" variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </ButtonComponent>
          </Grid>
        </Grid>
      </ModalComponent>
    </Box>
  );
};

export default ActivityCreate;
