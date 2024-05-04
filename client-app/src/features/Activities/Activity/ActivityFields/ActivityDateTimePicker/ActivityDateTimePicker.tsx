import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StyledDateTimePickerComponent from './StyledActivityDateTimePicker';

type Props = {
  editMode: boolean;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1';
  label: string;
  updatedValue: string;
  value?: string;
  name: string;
  onChange: (value: string, name: string) => any;
};

export const ActivityDateTimePicker = ({ editMode, variant, label, updatedValue, value, name, onChange }: Props) => {
  return editMode ? (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDateTimePickerComponent defaultValue={dayjs(updatedValue || new Date().toLocaleDateString())} label="Pick a Date" onChange={(e: any) => onChange(e, name)} />
    </LocalizationProvider>
  ) : (
    <Typography className={variant === 'h1' ? 'mb-4' : 'mb-2'} color="primary" variant={variant}>
      {label}: {dayjs(value).format('dddd, MMMM D, YYYY - h:mm A')}
    </Typography>
  );
};

export default ActivityDateTimePicker;
