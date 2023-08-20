import { Components, Theme } from "@mui/material/styles";

export const MuiContainer: Components<Theme>["MuiContainer"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.up("xs")]: {
        //TODO: write down settings for tablet container: 0px - 767px
        padding: "0 16px",
      },

      [theme.breakpoints.up("md")]: {
        //TODO: write down settings for tablet container: 768px - 1279px
        padding: "0 40px",
      },

      [theme.breakpoints.up("lg")]: {
        //TODO: write down settings for desktop container: 1280px+
        padding: "0 48px",
      },
    }),
  },
};
