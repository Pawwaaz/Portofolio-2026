import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useRef } from "react";
import gsap from "gsap";
import SectionId from "./data";

function App() {
  const toolsRefs = useRef([]);

  const handleEnter = (index) => {
    gsap.to(toolsRefs.current[index], {
      x: -6,
      y: -6,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const handleLeave = (index) => {
    gsap.to(toolsRefs.current[index], {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div
        className="hero grid md:grid-cols-2 grid-cols-1 pt-10 items-center xl:gap-0 gap-6 "
        id="beranda"
      >
        <div className="animate__animated animate__fadeInUp">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="hero image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Detail-oriented QA Tester with a developer's perspective.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Halo, Saya Muhammad Pawwaaz Rafii.
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Fresh Graduate Teknologi Rekayasa Multimedia dengan latar belakang
            Web Development dan pengalaman di Quality Assurance. Berpengalaman
            dalam functional testing, API testing dengan Postman, dan automated
            testing dengan Katalon.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/CV Rafii (QA).pdf"
              download={"Muhammad-Pawwaaz-Rafii-resume(QA)"}
              className="bg-violet-500 p-4 rounded-2xl hover:bg-violet-700"
            >
              {" "}
              Download CV<i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#projek"
              className="bg-violet-300 p-4 rounded-2xl hover:bg-violet-500"
            >
              {" "}
              My Projects<i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="hero image"
          className="w[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2.3s"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
        >
          <img
            src={DataImage.HeroImage}
            alt=""
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Memiliki passion di bidang IT, khususnya Quality Assurance (QA).
            Berpengalaman memahami alur pengembangan software dengan metode SDLC
            Waterfall, serta terampil dalam pembuatan test case untuk manual
            testing. Memiliki pemahaman dasar pengujian otomatis API menggunakan
            Postman dan automation testing menggunakan Katalon Studio.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt=""
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <h1 className="text-4xl mb-1">
                9<span className="text-violet-500">+</span>
              </h1>
              <p>proyek</p>
            </div>
            <div className="">
              <h1 className="text-4xl mb-1">
                6<span className="text-violet-500">+</span>
              </h1>
              <p>sertifikasi</p>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up">
            Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
          >
            Berikut Stack dan tools yang biasa saya pakai sehari-hari.
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listTools.map((tool, index) => (
              <div
                key={tool.id}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Layer warna statis di belakang */}
                <div
                  className="absolute inset-0 rounded-md"
                  style={{
                    backgroundColor: tool.warna,
                    transform: "translate(6px, 6px)",
                  }}
                ></div>

                {/* Card utama, gerak pas hover */}
                <div
                  ref={(el) => (toolsRefs.current[index] = el)}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  className="group relative flex items-center gap-2 p-3 bg-zinc-800 border border-zinc-600 rounded-md"
                >
                  <img
                    loading="lazy"
                    src={tool.gambar}
                    alt=""
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  />
                  <div className="">
                    <h4 className="font-bold ">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek */}
        <div id="projek" className="proyek m-32 py-10">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
          >
            Proyek
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
          >
            Berikut proyek yang pernah saya kerjakan
          </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek, index) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800 rounded-md"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <img src={proyek.gambar} alt="" className="" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        key={index}
                        className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600"
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href={proyek.link}
                      target="_blank"
                      className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-500"
                    >
                      Lihat Proyek
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
          >
            Kontak
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
          >
            Let's Connect
          </p>
          <form
            action="https://formspree.io/f/mnqkegjv"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
            autoComplete="off"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukan nama"
                  required
                  className="border border-zinc-500 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukan email"
                  required
                  className="border border-zinc-500 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold ">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols={45}
                  rows={7}
                  placeholder="Masukan pesan"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-500"
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
