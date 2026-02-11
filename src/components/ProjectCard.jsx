import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "all 0.35s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-14px) scale(1.03)",
          boxShadow: "0 25px 60px rgba(34,211,238,0.35)",
          border: "1px solid rgba(34,211,238,0.6)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.8, fontSize: "0.95rem" }}>
          {desc}
        </Typography>

        <Chip
          label={tech}
          size="small"
          sx={{
            mt: 2,
            background: "rgba(34,211,238,0.15)",
            color: "#22D3EE",
          }}
        />
      </CardContent>
    </Card>
  );
}
