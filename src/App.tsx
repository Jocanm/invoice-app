import { Box, styled } from "@mui/material";
import { Menu } from "./components/ui/Menu";
import { AppRouter } from "./config/router/App.router";
import { ThemeContextProvider } from "./config/theme/ThemeContextProvider";

const ContentContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short,
  }),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const Content = () => {
  return (
    <ContentContainer>
      <Menu />
      <Box flexGrow={1} component="main" py={[8, 16, 18]} px={[6, 12]}>
        <AppRouter />
      </Box>
    </ContentContainer>
  );
};
const App = () => {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
};

export default App;
