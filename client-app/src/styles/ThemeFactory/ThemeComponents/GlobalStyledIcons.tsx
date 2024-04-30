import { Components, Theme } from "@mui/material";

const StyledIcons: Components<Theme>["MuiSvgIcon"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      '&:hover': {
        ...(ownerState['data-animation'] === true && {
          transform: 'rotate(25deg)',
        }),
      } 
    }),
  },
};

export default StyledIcons;
