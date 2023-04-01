import { PaletteMode, darken, lighten } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { KeyboardArrowDown } from "@mui/icons-material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    customGrey: true;
  }

  // // interface ButtonPropsVariantOverrides {
  // //   custom: true;
  // // }
}

declare module "@mui/material/styles" {
  interface Palette {
    customGrey: Palette["primary"];
  }
  interface PaletteOptions {
    customGrey: PaletteOptions["primary"];
  }
}

export const myColors = {
  1: "#7C5DFA",
  2: "#9277FF",
  3: "#1E2139",
  4: "#252945",
  5: "#DFE3FA",
  6: "#888EB0",
  7: "#7E88C3",
  8: "#0C0E16",
  9: "#EC5757",
  10: "#FF9797",
  11: "#F8F8FB",
  12: "#141625",
  13: "#F8F8FB",
  14: "#F9FAFE",
  15: "#DFE3FA",
  16: "#373B53",
} as const;

const components = (mode: PaletteMode): ThemeOptions["components"] => ({
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: "1.5rem",
        "&:hover": {
          boxShadow: "none",
        },
      },
      containedPrimary: ({ theme }) => ({
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      }),
      containedSecondary: ({ theme }) => ({
        color: mode === "light" ? myColors[7] : myColors[5],
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: mode === "light" ? myColors[15] : "#FFFFFF",
        },
      }),
      containedError: ({ theme }) => ({
        "&:hover": {
          backgroundColor: theme.palette.error.light,
        },
      }),
    },
    defaultProps: {
      variant: "contained",
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        borderRadius: "0.5rem",
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      keepMounted: false,
    },
    styleOverrides: {
      container: {
        backgroundColor: "#0000005",
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      icon: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
    },
    defaultProps: {
      IconComponent: KeyboardArrowDown,
    },
  },
});

const palette = (mode: PaletteMode): ThemeOptions["palette"] => ({
  mode,
  primary: {
    main: myColors[1],
    light: myColors[2],
    dark: darken(myColors[1], 0.2),
  },
  secondary: {
    main: mode === "light" ? myColors[14] : myColors[4],
    dark: myColors[15],
    light: lighten(myColors[14], 0.2),
  },
  error: {
    main: myColors[9],
    light: myColors[10],
    dark: darken(myColors[9], 0.2),
  },
  customGrey: {
    main: myColors[16],
    light: lighten(myColors[16], 0.2),
    dark: mode === "light" ? myColors[8] : myColors[3],
    contrastText: mode === "light" ? myColors[6] : myColors[5],
  },
  background: {
    default: mode === "dark" ? myColors[12] : myColors[13],
    paper: mode === "dark" ? myColors[3] : "#FFFFFF",
  },
});

const typography = (mode: PaletteMode): ThemeOptions["typography"] => ({
  fontFamily: ["League Spartan", "sans-serif"].join(","),
  allVariants: {
    color: mode === "light" ? myColors[8] : "#FFFFFF",
  },
  h1: {
    fontSize: "2.25rem",
    fontWeight: 700,
    letterSpacing: "-1px",
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "-0.75px",
  },
  h3: {
    fontSize: ".9375rem",
    fontWeight: 700,
    letterSpacing: "-0.25px",
  },
  button: {
    fontWeight: 700,
    fontSize: ".9375rem",
    textTransform: "none",
    letterSpacing: "-0.25px",
  },
  body1: {
    fontSize: ".8125rem",
    fontWeight: 500,
    letterSpacing: "-0.1px",
  },
  caption: {
    fontSize: ".8125rem",
    fontWeight: 500,
    letterSpacing: "-0.1px",
    color: mode === "light" ? myColors[7] : myColors[5],
  },
});

export const themeSettings = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: palette(mode),
    components: components(mode),
    typography: typography(mode),
    spacing: (factor: number) => `${0.25 * factor}rem`,
  };
};
