import { FiArrowRight } from 'react-icons/fi'

function ProjectRail({ projects, selectedId, onSelect }) {
  return (
    <div className="project-rail" aria-label="制作物一覧">
      {projects.map((project) => (
        <button
          key={project.id}
          className={['rail-item', selectedId === project.id && 'is-active'].filter(Boolean).join(' ')}
          onClick={() => onSelect(project.id)}
          aria-pressed={selectedId === project.id}
        >
          <span className="rail-dot" />
          <img src={project.image} alt="" />
          <span>
            <strong>{project.title}</strong>
            <small>{project.intro}</small>
          </span>
          <FiArrowRight />
        </button>
      ))}
    </div>
  )
}

export default ProjectRail
