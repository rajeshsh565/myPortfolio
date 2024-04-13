import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard"
import { skills } from "../data";
const Skills = () => {
  return (
    <section className="align-items sm:py-20" id="skills">
     <SectionTitle text="tech stack"></SectionTitle>
     <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill)=>{
               return <SkillsCard {...skill} key={skill.id}/>
          })}
     </div>
    </section>
  )
}
export default Skills