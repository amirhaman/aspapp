import React from 'react';
import { Typography } from '@mui/material';
import TextFieldComponent from '@/components/FieldComponent/TextFieldComponent/TextFieldComponent';

type Props = {
  editMode: boolean;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  name: string;
  value: string;
  updatedValue: string;
  Label: string;
  handleFieldChangeReducer: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void
}

export const ActivityTextField = ({editMode, variant, name, value, updatedValue, Label, handleFieldChangeReducer} : Props) => {
  return (
    editMode ? (
      <TextFieldComponent
        autoComplete="off"
        className=""
        id={`activity-${name}`}
        ariaLabel={Label}
        name={name}
        value={updatedValue}
        type="text"
        color="primary"
        label={Label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChangeReducer(e, name)}
      />
    ) : (
      <Typography className={variant === "h1" ? "mb-4" : "mb-2"} color="primary" variant={variant}>
        {Label}: {value}
      </Typography>
    )
  )
}

export default ActivityTextField;
