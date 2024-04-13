import ProjectsCard from "./ProjectsCard"
import {projects, teaStationBadges, jobifyBadges, eBillBadges} from "../data"
import SectionTitle from "./SectionTitle"


const Projects = () => {
  
  return (
    <section className="align-items sm:py-20" id="projects">
     <SectionTitle text="Web Works" link="https://github.com/rajeshsh565?tab=repositories"></SectionTitle>
     <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
     {projects.map((project,index)=>{
          if (index==0) return <ProjectsCard key={project.id} {...project}  badges={teaStationBadges}></ProjectsCard>
          if (index==1) return <ProjectsCard key={project.id} {...project}  badges={jobifyBadges}></ProjectsCard>
          if (index==2) return <ProjectsCard key={project.id} {...project}  badges={eBillBadges}></ProjectsCard>
     })}
     </div>
    </section>
  )
}
export default Projects