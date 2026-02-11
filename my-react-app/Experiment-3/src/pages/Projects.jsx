import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <h1 className="mb-5">Selected Work</h1>

        {/* Bootstrap Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={index}
            >
              <ProjectCard
                title={project.title}
                desc={project.desc}
                tech={project.tech}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
