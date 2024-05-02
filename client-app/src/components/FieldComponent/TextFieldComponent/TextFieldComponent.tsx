import React from 'react';
import StyledCustomGlobalField from '../StyledCustomGlobalField';
import { TextField } from '@mui/material';

type Props = {
  id: string;
  value?: string | undefined;
  label?: string | undefined;
  type?: 'text' | 'submit' | 'textarea' | 'checkbox' | 'hidden' | 'email' | 'password';
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  onChange?: any | undefined;
  multiline?: boolean | undefined;
  required?: boolean;
  name?: string;
  rows?: number;
  hasError?: boolean;
  className?: string;
  autoComplete?: string;
  ariaLabel: string;
  inputRef?: any;
};

export default function TextFieldComponent({
  label,
  color,
  multiline,
  onChange,
  type,
  value,
  required,
  name,
  rows,
  id,
  hasError,
  className,
  autoComplete,
  ariaLabel,
  inputRef,
}: Props) {
  return (
    <StyledCustomGlobalField sx={{ minWidth: 120 }} fullWidth className={`${className}`}>
      <TextField
        autoComplete={autoComplete}
        className={`${hasError ? 'has-error' : ''}`}
        id={id}
        name={name}
        value={value}
        {...(type === 'hidden' ? { hidden: true } : null)}
        {...(rows ? { rows: rows } : null)}
        type={type}
        multiline={multiline}
        color={color}
        label={label}
        aria-label={ariaLabel}
        onChange={onChange}
        required={required || false}
        inputRef= {inputRef}
      />
    </StyledCustomGlobalField>
  );
}
