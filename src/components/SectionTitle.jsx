const SectionTitle = ({text, link, badges}) => {
  return <div className="border-b border-gray-300 pb-5">
    <h2 className="capitalize text-3xl font-medium tracking-wider">{text}</h2>
    {link && <a href={link} target="_blank" className="absolute right-10 xl:right-16 font-bold text-lg text-emerald-600 hover:underline hover:underline-offset-4" style={{marginTop:"-5px"}}>View All</a>}
  </div>;
};
export default SectionTitle;