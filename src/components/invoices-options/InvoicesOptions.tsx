import { AddCircle, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useStore } from "../../store/store";

export const InvoicesOptions = () => {
  const invoicesLength = useStore((state) => state.invoices.length);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="start"
      width="100%"
      alignItems="center"
      spacing={4.5}
    >
      <Stack flexGrow={1}>
        <Typography variant="h1">Invoices</Typography>
        <Typography variant="caption">
          {invoicesLength} {invoicesLength === 1 ? "invoice" : "invoices"}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <Typography variant="h3">Filter</Typography>
        <KeyboardArrowDown
          sx={{
            color: "primary.main",
            transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Stack>
      <Button
        sx={{ pl: 2 }}
        startIcon={<AddCircle sx={{ fontSize: "2rem !important" }} />}
      >
        New
      </Button>
      <Menu
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ sx: { mt: 4 } }}
      >
        <MenuItem>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="h3">Paid</Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="h3">Pending</Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="h3">Draft</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
