import { Button, Stack, Typography, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ThemeContextProvider } from "./config/theme/ThemeContextProvider";
import { useThemeContext } from "./config/theme/ThemeContext";

const Content = () => {
  const { toggleMode } = useThemeContext();

  return (
    <Stack spacing={4} p={4} height="100%" bgcolor="background.default">
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="error">Error</Button>
      <Button color="customGrey">Custom Grey</Button>
      <IconButton onClick={toggleMode} sx={{ width: "3rem", color: "white" }}>
        <Add />
      </IconButton>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis
      </Typography>
      <Typography variant="caption">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis
      </Typography>
    </Stack>
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
