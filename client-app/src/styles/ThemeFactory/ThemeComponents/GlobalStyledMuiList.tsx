import { Components, Theme } from "@mui/material";

const StyledMuiList: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      color: `${theme.palette.primary.contrastText} !important`,
      padding: "1em 0",
      minWidth: "150px",
    }),
  },
};

export default StyledMuiList;
