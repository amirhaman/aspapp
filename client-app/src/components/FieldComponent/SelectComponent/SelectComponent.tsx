import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StyledCustomGlobalField from '../StyledCustomGlobalField';

type Props = {
  id: string;
  label?: string | undefined;
  value: string;
  ariaLabel: string;
  onChange?: any | undefined;
  hasError?: boolean;
  options: {
    text: string;
    value: string;
  }[];
};

export default function SelectComponent({ label, value, onChange, id, hasError, options, ariaLabel }: Props) {
  return (
    <StyledCustomGlobalField sx={{ minWidth: 120 }} fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select value={value || ''} className={hasError ? 'has-error' : ''} labelId={id} id={id} label={label} type="select" onChange={onChange} aria-label={ariaLabel}>
        {options?.map((el: any, index: number) => {
          return (
            <MenuItem key={el.value + index} id={el.value + id} value={el.value}>
              {el.text}
            </MenuItem>
          );
        })}
      </Select>
    </StyledCustomGlobalField>
  );
}
