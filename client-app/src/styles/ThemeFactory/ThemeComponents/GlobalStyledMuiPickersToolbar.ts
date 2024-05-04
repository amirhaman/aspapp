import { Components, Theme } from "@mui/material";
import type {} from '@mui/x-date-pickers/themeAugmentation';

const StyledMuiPickersToolbar: Components<Theme>["MuiPickersToolbar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      "& .MuiTypography-root": {
        color: `${theme.palette.primary.contrastText}`,
        "&.Mui-selected" : {
          padding: "0.2rem",
          background: `${theme.palette.primary.contrastText}`,
          color: `${theme.palette.primary.dark}`,
        }
      }
    }),
  },
};

export default StyledMuiPickersToolbar;
