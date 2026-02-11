import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr" },
        alignItems: "center",
        px: { xs: 3, md: 10 },
        pt: 12,
      }}
    >
      {/* LEFT */}
      <Box>
        <Typography variant="h3" fontWeight="bold">
          I design & build <br />
          <span style={{ color: "#22D3EE" }}>
            beautiful web experiences
          </span>
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 480 }}>
          Hi, I’m <b>Sujal Jain</b> — a frontend developer focused on modern UI,
          clean architecture, and performance-driven design.
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          {/* ✅ FIXED BUTTON */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </Button>

          <Button variant="outlined" color="secondary">
            Download CV
          </Button>
        </Stack>
      </Box>

      {/* RIGHT */}
      <Stack spacing={2}>
        <div className="glass p-4">⚡ React + MUI Expert</div>
        <div className="glass p-4">🎨 UI/UX Focused</div>
        <div className="glass p-4">🚀 Performance Driven</div>
      </Stack>
    </Box>
  );
}
