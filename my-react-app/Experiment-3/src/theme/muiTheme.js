import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7C7CFF" },
    secondary: { main: "#22D3EE" },
    background: {
      default: "#0B0F1A",
      paper: "rgba(255,255,255,0.08)",
    },
  },
  typography: {
    fontFamily: "Poppins, Inter, sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
