import { Box, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Add, Feed, NavBar, RightBar, SideBar } from "./components";
import { darkTheme, SocialTheme, theme } from "./theme";

export function App() {
  const [mode, setMode] = useState('light');
  
  return (
    <ThemeProvider theme={mode === "light" ? darkTheme : theme}>
      <Box bgcolor={"Background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}
