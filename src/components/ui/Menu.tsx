import { Box, Typography, styled, Stack } from "@mui/material";
import { Brightness3, LightMode } from "@mui/icons-material";
import { LogoIcon } from "../../assets";
import { useThemeContext } from "../../config/theme/ThemeContext";

const MenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: theme.spacing(18),
  backgroundColor: theme.palette.customGrey.main,
  [theme.breakpoints.up("sm")]: {
    height: theme.spacing(24),
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
    width: "103px",
    flexDirection: "column",
    borderRadius: "0 1.25rem 1.25rem 0",
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
  [theme.breakpoints.up("md")]: {
    width: "100%",
    minHeight: "103px",
    maxHeight: "103px",
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

export const AvatarImg = styled("img")(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "50%",
  width: theme.spacing(8),
  height: theme.spacing(8),
  [theme.breakpoints.up("sm")]: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  [theme.breakpoints.up("md")]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const Menu = () => {
  const { mode, toggleMode } = useThemeContext();

  const Icon =
    mode === "dark" ? (
      <LightMode onClick={toggleMode} />
    ) : (
      <Brightness3 onClick={toggleMode} />
    );

  return (
    <MenuContainer>
      <MenuLogo>
        <img src={LogoIcon} alt="logo" />
      </MenuLogo>
      <Stack
        spacing={6}
        alignItems="center"
        height={{ xs: "100%", md: "auto" }}
        direction={{ xs: "row", md: "column" }}
        width={{ xs: "auto", md: "100%" }}
      >
        <Typography
          variant="caption"
          display="flex"
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          {Icon}
        </Typography>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={{ xs: "100%", md: "96px" }}
          width={{ xs: "80px", sm: "96px", md: "100%" }}
          borderLeft={{ xs: "1px solid #494E6E", md: "none" }}
          borderTop={{ xs: "none", md: "1px solid #494E6E" }}
        >
          <AvatarImg
            alt="avatar"
            src="https://avatars.githubusercontent.com/u/84754068?s=400&v=4"
          />
        </Stack>
      </Stack>
    </MenuContainer>
  );
};
