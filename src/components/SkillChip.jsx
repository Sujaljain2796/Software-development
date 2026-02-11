import { Chip } from "@mui/material";

export default function SkillChip({ label }) {
  return (
    <Chip
      label={label}
      sx={{
        px: 1.5,
        py: 2,
        fontSize: "0.85rem",
        background: "linear-gradient(135deg, #7C7CFF, #22D3EE)",
        color: "#0B0F1A",
        fontWeight: 600,
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px) scale(1.08)",
          boxShadow: "0 12px 30px rgba(34,211,238,0.6)",
        },
      }}
    />
  );
}
