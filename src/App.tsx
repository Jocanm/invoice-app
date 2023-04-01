import { Box, styled } from "@mui/material";
import { Menu } from "./components/ui/Menu";
import { AppRouter } from "./config/router/App.router";
import { ThemeContextProvider } from "./config/theme/ThemeContextProvider";

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const Content = () => {
  return (
    <ContentContainer
      bgcolor="background.default" 
    >
      <Menu />
      <Box
        flexGrow={1}
        component="main" 
        sx={{
          transition: (theme) => theme.transitions.create("background-color", {
          duration: theme.transitions.duration.short
        })
      }}
      >
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
