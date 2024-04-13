import {TbWorldWww} from "react-icons/tb"
import {FaGithubSquare} from "react-icons/fa"
const ProjectsCard = ({img, url, github, title, text, badges}) => {
  return (
    <article className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
     <img src={img} alt="" className="w-full object-cover rounded-t-lg h-64"/>
     <div className="p-8">
          <div className="flex justify-between">
          <span className="text-xl font-medium tracking-wide capitalize">{title}</span>
          {badges && <div className="flex flex-wrap w-2/3 justify-end" style={{marginTop:"-1.5rem", marginBottom:"auto"}}>
          {badges.map((badge, index)=>{
            if(badge.text=="MERN"){
              return <span className={`ml-1 mt-1 border-2 border-t-green-500 border-r-gray-500 border-b-sky-500 border-l-lime-500 rounded-full px-2 flex py-1`} key={index}>{
                badge.subTech && badge.subTech.map((sub,index)=>{
                  return <span className={`${sub.textColorClass} text-xs font-medium`} key={index}>{`${sub.letter}.`}</span>
                })
              }</span>
            }
            else
            return <span className={`ml-1 mt-1 text-xs border-2 ${badge.borderColorClass} ${badge.textColorClass} ${badge.bgColorClass} rounded-full px-2 py-1 font-medium`} key={index}>{badge.text.toUpperCase()}</span>
          })}
        </div>}
          </div>
          <p className="text-slate-700 leading-loose mt-4">{text}</p>
          <div className="flex gap-x-4">
               <a href={url} target="_blank">
               <TbWorldWww className="w-8 h-8 text-slate-500 hover:text-black duration-300"></TbWorldWww>
               </a>
               <a href={github} target="_blank">
               <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
               </a>
          </div>
     </div>
    </article>
  )
}
export default ProjectsCard