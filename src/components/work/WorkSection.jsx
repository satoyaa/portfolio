import { useState } from 'react'
import { projects } from '../../data/siteContent.js'
import useMediaQuery from '../../utils/useMediaQuery.js'
import ProjectRail from './ProjectRail.jsx'
import ProjectFeature from './ProjectFeature.jsx'

function WorkSection() {
  const isStacked = useMediaQuery('(max-width: 1000px)')
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const selectedProject = projects.find((project) => project.id === selectedId) ?? projects[0]
  const rail = <ProjectRail projects={projects} selectedId={selectedId} onSelect={setSelectedId} />
  const feature = <ProjectFeature project={selectedProject} />

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      {isStacked ? <>{feature}{rail}</> : <>{rail}{feature}</>}
    </section>
  )
}

export default WorkSection
