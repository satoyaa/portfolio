import { useState } from 'react'
import { projects } from '../../data/siteContent.js'
import ProjectRail from './ProjectRail.jsx'
import ProjectFeature from './ProjectFeature.jsx'

function WorkSection() {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const selectedProject = projects.find((project) => project.id === selectedId) ?? projects[0]

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <ProjectRail projects={projects} selectedId={selectedId} onSelect={setSelectedId} />
      <ProjectFeature project={selectedProject} />
    </section>
  )
}

export default WorkSection
