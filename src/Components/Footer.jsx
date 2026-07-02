import { SectionId } from "../data";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row md:gap-0 flex-col gap-6 justify-between items-center">
      <h1 className="text-2xl font-bold ">Portofolio</h1>
      <div className="flex gap-7">
        <a href={`#${SectionId.Beranda}`}>Beranda</a>
        <a href={`#${SectionId.Tentang}`}>Tentang</a>
        <a href={`#${SectionId.Projek}`}>Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Pawwaaz">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammadpawwaazrafii/?skipRedirect=true">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="http://instagram.com/mpwzrf">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
