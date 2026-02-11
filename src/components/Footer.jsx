import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box textAlign="center" py={3} sx={{ opacity: 0.6 }}>
      <Typography variant="body2">
        © 2026 Sujal Jain | Built with React & Material UI
      </Typography>
    </Box>
  );
}
