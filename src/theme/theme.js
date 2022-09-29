import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#371B58",
      light: "#7858A6",
      lighter: "#937DC2"
    },
    secondary: {
      main: "#C689C6",
      light:"#E8A0BF",
      lighter: "#FFABE1"
    },
    warning: {
      main: "#999",
    },
  },
});

export const darkTheme = createTheme({
  pallete:{
    mode: "dark",
  }
})
