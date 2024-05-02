import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { styled as muiStyled } from "@mui/material";

const StyledCustomGlobalField = muiStyled(FormControl, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "variant",
  name: "StyledCustomGlobalField",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === "primary" && styles.primary, props.color === "secondary" && styles.secondary],
})(({ theme, variant}) => ({
  width: "100%",
  // minHeight: "40px",
  margin: "10px 0",
  color: `${theme.palette.primary.contrastText}`,
  backgroundColor: theme.palette.background.default,
  ...(variant !== "standard" && {
    border: `0.08rem solid ${theme.palette.primary.contrastText}`,
  }
  ),
  label: {
    color: `${theme.palette.primary.contrastText} !important`,
    backgroundColor: theme.palette.background.default,
    marginLeft: "-6px",
    padding: "0 6px",
    borderRadius: "6px",
    zIndex: 2,
    '& .Mui-focused, & span, & .MuiTypography-root':{
      color: theme.palette.primary.contrastText,
    },
  },
  input : {
    color: theme.palette.primary.contrastText,
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s',
      WebkitTextFillColor: theme.palette.primary.contrastText,
    },
  },
  textarea: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
    '&.Mui-focused': {
      color: theme.palette.primary.contrastText,
    }
  },

  '& .MuiButtonBase-root, & .MuiFormControl-root, & .MuiSvgIcon-root, & .MuiSelect-select, & .MuiInputBase-root' : {
    color: `${theme.palette.primary.contrastText}`,
    '&.has-error': {
      border: `0.07em solid red !important`
    },
  },
}));

export default StyledCustomGlobalField;
