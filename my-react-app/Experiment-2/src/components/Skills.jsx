import { LinearProgress, Typography } from "@mui/material";

function SkillBar({ skill, value }) {
  return (
    <div className="mb-3">
      <Typography>{skill}</Typography>
      <LinearProgress variant="determinate" value={value} />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-light py-5">
      <div className="container" data-aos="fade-right">
        <h2 className="text-center fw-bold mb-4">Skills</h2>
        <SkillBar skill="React" value={90} />
        <SkillBar skill="JavaScript" value={85} />
        <SkillBar skill="Python" value={80} />
        <SkillBar skill="UI/UX" value={75} />
      </div>
    </section>
  );
}

export default Skills;
