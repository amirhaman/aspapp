import {MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { styled as muiStyled } from '@mui/material';

const StyledDateTimePickerComponent = muiStyled(MobileDateTimePicker, {
  // Configure which props should be forwarded on DOM
  name: 'StyledDateTimePickerComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === 'primary' && styles.primary, props.color === 'secondary' && styles.secondary],
})(({ theme }) => ({
  input: {
    color: theme.palette.primary.contrastText
  },
  label: {
    color: theme.palette.primary.contrastText
  },
  fieldset: {
    color: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.contrastText}`
  },
  "& span": {
    color: theme.palette.primary.contrastText,
  },
  "&.mui-1mssgjg-MuiTypography-root-MuiPickersToolbarText-root": {
    color: "red !important"
  }
}));

export default StyledDateTimePickerComponent;
