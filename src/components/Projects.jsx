import Project from "./Project.jsx";
const Projects = () => {
  const projects = [
    {
      imgPath: "src/assets/deno-icon.png",
      name: "deno",
      description: "Test your Deno project",
    },
    {
      imgPath: "src/assets/package-icon.png",
      name: "Publish Node.js Package",
      description: "Publishes a Node.js package to npm",
    },
    {
      imgPath: "src/assets/node-js-icon.png",
      name: "Node.js",
      description: "Build and test a Node.js project with npm",
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

// export our component
export default Projects;
