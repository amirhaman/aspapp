import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import StyledCustomGlobalField from '../StyledCustomGlobalField';
import { Typography } from '@mui/material';

type Props = {
  id: string;
  value?: string | undefined;
  label?: string | undefined;
  onChange?: any | undefined;
  name?: string;
  checked?: boolean;
  hasError?: boolean;
  ariaLabel: string;
};

export default function CheckboxComponent({ label, onChange, value, name, checked, id, hasError, ariaLabel}: Props) {
  return (
    <StyledCustomGlobalField sx={{ minWidth: 120 }} fullWidth variant="standard">
      <FormGroup>
        <FormControlLabel
          style={{ margin: 0 }}
          control={<Checkbox className={hasError ? 'has-error' : ''} checked={checked} value={value} id={id} name={name} color="secondary" onChange={onChange} aria-label={ariaLabel}/>}
          label={<Typography component="p"><a href="/">{label}</a></Typography>}
        />
      </FormGroup>
    </StyledCustomGlobalField>
  );
}
