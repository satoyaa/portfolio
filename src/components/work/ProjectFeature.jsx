import { FiExternalLink } from 'react-icons/fi'

function ProjectFeature({ project }) {
  return (
    <article className="project-feature">
      <div className="feature-copy">
        <p className="project-number">{project.id} <span /></p>
        <h2 id="work-heading">{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a href={project.href} target="_blank" rel="noreferrer">
          プロジェクトを見る <FiExternalLink />
        </a>
      </div>
      <div className="feature-image">
        <img src={project.image} alt={`${project.title} の画面`} />
      </div>
    </article>
  )
}

export default ProjectFeature
