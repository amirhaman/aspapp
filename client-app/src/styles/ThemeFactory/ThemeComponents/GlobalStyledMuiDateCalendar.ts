import { Components, Theme } from "@mui/material";

const StyledMuiDateCalendar: Components<Theme>["MuiDateCalendar"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      "& .MuiSvgIcon-root" : {
        color: theme.palette.primary.contrastText
      },
      button: {
        color: theme.palette.primary.contrastText
      }
    }),
  },
};

export default StyledMuiDateCalendar;
