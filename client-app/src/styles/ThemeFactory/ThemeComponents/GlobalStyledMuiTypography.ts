import { Components, Theme } from "@mui/material";

const StyledMuiTypography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      '&.MuiTypography-root': {
        color: theme.palette.primary.contrastText,
      },
      '&.MuiTypography-h1': {
        fontSize: '3rem',
      },
      '&.MuiTypography-h2': {
        fontSize: '2.75rem',
      },
      '&.MuiTypography-h3': {
        fontSize: '2.5rem',
      },
      '&.MuiTypography-h4': {
        fontSize: '2.25rem',
      },
      '&.MuiTypography-h5': {
        fontSize: '2.0rem',
      },
      '&.MuiTypography-h6': {
        fontSize: '1.75rem',
      },
      '&.MuiTypography-body1': {
        fontSize: '1rem'
      },
      '&.MuiTypography-body2': {
        fontSize: '1rem'
      },
      '&.MuiTypography-subtitle1': {
        fontSize: '1rem'
      },
      '&.MuiTypography-subtitle2': {
        fontSize: '1rem'
      }
    }),
  },
};

export default StyledMuiTypography;