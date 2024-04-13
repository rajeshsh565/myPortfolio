const SkillsCard = ({title, icon, text}) => {
  return <article className="p-2 shadow-lg hover:shadow-xl rounded-md">
    <div>{icon}</div>
    <h2 className="mt-6 font-medium">{title}</h2>
    <p className="mt-2 text-slate-500">{text}</p>
  </article>;
};
export default SkillsCard;
