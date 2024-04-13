import { links } from "../data";

const NavBar = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = document.querySelector('nav').offsetHeight; // Get navbar height
      const scrollTop = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollTop
      });
    }
  }
  return (
    <nav className="bg-emerald-100 top-0 sticky z-50">
      <div className="align-items flex flex-col py-4 items-center gap-y-3 sm:flex-row sm:gap-x-24 sm:py-8">
        <h2 className="text-3xl font-bold hover:cursor-pointer">
          Port<span className="text-emerald-600">folio.</span>
        </h2>
        <div className="flex gap-5">
          {links.map((link) => {
            const { id, text, href } = link;
            return (
              <div className="nav-link" key={id}>
              <button
                className="capitalize tracking-wide text-lg font-semibold hover:text-emerald-600 duration-300"
                onClick={()=>handleScroll(href)}
                >
                {text}
              </button>
              <div className="border-b-2 border-emerald-600 ani-underline"></div>
                </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
