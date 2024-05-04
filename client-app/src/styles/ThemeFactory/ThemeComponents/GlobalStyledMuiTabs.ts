import { Components, Theme } from "@mui/material";
// import type {} from '@mui/x-date-pickers/themeAugmentation';

const StyledMuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      "& .MuiSvgIcon-root" : {
        color: theme.palette.primary.contrastText
      }
    }),
  },
};

export default StyledMuiTabs;
