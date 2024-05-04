import { Components, Theme } from "@mui/material";

const StyledMuiDialogActions: Components<Theme>["MuiDialogActions"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create(['color', 'transform'], {
        duration: 1000,
      }),
      button: {
        color: theme.palette.primary.contrastText
      }
    }),
  },
};

export default StyledMuiDialogActions;
