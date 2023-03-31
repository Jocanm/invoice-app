import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { usePalleteMode } from "../../shared/hooks/usePaletteMode";
import { ThemeContext } from "./ThemeContext";
import { themeSettings } from "./theme";

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = usePalleteMode();

  const colorMode = React.useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode, setMode]
  );

  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
