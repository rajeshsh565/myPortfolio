import aboutImg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"
const About = () => {
  return (
    <section className="bg-white sm:py-20" id="about">
     <div className="align-items grid md:grid-cols-2 gap-16 items-center">
          <img src={aboutImg} alt="" className="h-64 w-full"/>
          <article>
          <SectionTitle text="About Me"></SectionTitle>
          <p className="text-slate-500 mt-8 leading-loose">Hi, Everyone! I'm <span className="text-emerald-600 font-bold font-mono">Rajesh Singh</span> from <span className="text-emerald-600 font-bold font-mono">Uttrakhand, India. </span>A passionate developer currently immersed in the world of the MERN stack, eagerly building my skills in crafting interactive front-ends with React and tackling efficient data management using databases.</p>
          </article>
     </div>
    </section>
  )
}
export default About