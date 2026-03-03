import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Smart Task Manager",
      description: "Redux-based task tracking system with filtering."
    },
    {
      title: "AI Health Monitor",
      description: "Personalized health recommendation system."
    },
    {
      title: "E-Commerce Dashboard",
      description: "Cart, checkout and analytics system."
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio with routing."
    },
    {
      title: "Event Scheduler",
      description: "Dynamic schedule planner with reports."
    },
    {
      title: "Productivity Analytics",
      description: "Performance tracking dashboard with charts."
    }
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;