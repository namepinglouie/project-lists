const Project = ({project}) => {
    return (
        <article className="project">
            <img src={project.imgPath}/>
            <p className="project_name">{project.name}</p>
            <p className="project_description">{project.description}</p>
            <button>Configure</button>
        </article>
    )
};

export default Project;
