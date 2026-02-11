import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ background: "transparent", backdropFilter: "blur(10px)" }}
    >
      <Toolbar>
        <Typography fontWeight="bold" sx={{ flexGrow: 1 }}>
          ElevateUI
        </Typography>

        <Button component={Link} to="/" color="secondary">Home</Button>
        <Button component={Link} to="/projects" color="secondary">Work</Button>
        <Button component={Link} to="/contact" color="primary" variant="outlined">
          Let’s Talk
        </Button>
      </Toolbar>
    </AppBar>
  );
}
