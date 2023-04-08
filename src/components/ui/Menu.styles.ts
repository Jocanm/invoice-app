import { styled, Box } from "@mui/material";

export const MenuContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: theme.spacing(18),
  [theme.breakpoints.up("sm")]: {
    height: theme.spacing(24),
  },
}));

export const MenuLogo = styled("div")(({ theme }) => ({
  height: "100%",
  position: "relative",
  width: theme.spacing(18),
  borderRadius: "0 1.25rem 1.25rem 0",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(24),
  },
  "::after": {
    bottom: 0,
    content: '""',
    height: "50%",
    width: "100%",
    position: "absolute",
    borderRadius: "1.25rem 0 1.25rem 0",
    backgroundColor: theme.palette.primary.light,
  },
  "& img": {
    zIndex: 1,
    top: "50%",
    left: "50%",
    width: "40%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
}));
