import { Box, TextField, Button, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box px={4} py={10} maxWidth={700} mx="auto">
      <Typography variant="h4" mb={2}>
        Let’s build something cool ✨
      </Typography>

      <Box className="glass" p={4}>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" rows={4} multiline margin="normal" />

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
