import { styled as muiStyled } from '@mui/material';
import { Button } from '@mui/material';

const CustomButtonStyledComponent = muiStyled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'CustomButtonStyledComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === 'primary' && styles.primary, props.color === 'secondary' && styles.secondary],
})(({ theme, color, variant, type, disabled }) => ({
  fontWeight: 'bold',
  minWidth: 'auto',
  ...(color === "success" && {
    '&.MuiButton-root': {
      backgroundColor: '#00a152',
      color: '#ffffff',
      opacity: 1,
    },
  }),
  ...(color === "warning" && {
    '&.MuiButton-root': {
      backgroundColor: '#f44336',
      color: '#ffffff',
      opacity: 1,
    },
  }),
  ...(disabled && {
    '&.MuiButton-root': {
      backgroundColor: 'dimgrey',
      color: '#cccccc',
      opacity: 1,
    },
  }),
  ...(color === 'primary'
    ? {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.background.default,
        ...(variant === 'outlined'
          ? {
              backgroundColor: theme.palette.background.default,
              background: theme.palette.background.default,
              border: '2px solid',
              borderColor: theme.palette.primary.contrastText,
            }
          : variant === 'contained'
            ? {
                backgroundColor: theme.palette.background.default,
                boxShadow: `0px 2px 16px ${theme.palette.primary.light}`,
              }
            : variant === 'text'
              ? {}
              : null),
      }
    : color === 'secondary'
      ? {
          color: theme.palette.secondary.contrastText,
          ...(variant === 'outlined'
            ? {
                backgroundColor: theme.palette.background.default,
                border: '2px solid',
                borderColor: theme.palette.secondary.contrastText,
              }
            : variant === 'contained'
              ? {
                  backgroundColor: theme.palette.background.default,
                  boxShadow: `0px 2px 16px ${theme.palette.primary.light}`,
                }
              : variant === 'text'
                ? {}
                : null),
        }
      : null),
}));

export default CustomButtonStyledComponent;
