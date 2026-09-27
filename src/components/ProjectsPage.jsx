export default function ProjectsPage({ projects, startIndex }) {
  return (
    <div className="page-content">
      <h3 className="page-content__heading">Projects</h3>
      <p className="page-content__lead">A few pages from the workshop.</p>

      <div className="project-list">
        {projects.map((project, i) => (
          <article className="project-card" key={project.title}>
            <span className="project-card__index">{String(startIndex + i + 1).padStart(2, '0')}</span>
            <div className="project-card__body">
              <h4 className="project-card__title">{project.title}</h4>
              <p className="project-card__description">{project.description}</p>
              <a
                className="project-card__link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
