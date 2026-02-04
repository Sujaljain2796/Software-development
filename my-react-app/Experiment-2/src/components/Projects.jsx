import { Card, CardContent, Typography } from "@mui/material";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center fw-bold mb-4">Projects</h2>
      <div className="row">
        {["Portfolio Website", "Student Dashboard", "AI Mini Project"].map((proj, i) => (
          <div className="col-md-4 mb-3" key={i} data-aos="flip-left">
            <Card sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }}>
              <CardContent>
                <Typography variant="h6">{proj}</Typography>
                <Typography variant="body2">A cool project showcasing my development skills.</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
