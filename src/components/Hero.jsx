import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import heroImg from "../assets/hero_2.svg";

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24" id="home">
      <article className="align-items grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-7xl font-bold tracking-wider"><span className="text-emerald-800">Hi!</span> I'm Rajesh</h1>
          <p className="text-3xl mt-4 text-slate-700 capitalize tracking-wide">
            full-stack web developer
          </p>
          <p className="text-xl mt-2 text-slate-700 capitalize">
            turning ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://wa.me/918077145118" target="_blank">
              <FaWhatsappSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaWhatsappSquare>
            </a>
            <a href="https://www.linkedin.com/in/rajesh-singh-81120120a/" target="_blank">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
            </a>
            <a href="https://github.com/rajeshsh565" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImg} alt="" className="h-80 md:h-96 mx-auto" />
        </div>
      </article>
    </section>
  );
};
export default Hero;
