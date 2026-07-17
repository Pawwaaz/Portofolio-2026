import HeroImage from "/assets/hero-img.jpeg";

const Image = {
  HeroImage,
};

export default Image;

export const SectionId = {
  Beranda: "beranda",
  Tentang: "tentang",
  Projek: "projek",
  Kontak: "kontak",
};

import VsCode from "/assets/tools/vscode.png";
import ReactJs from "/assets/tools/reactjs.png";
import Katalon from "/assets/tools/katalon.png";
import Tailwind from "/assets/tools/tailwind.png";
import Bootstrap from "/assets/tools/bootstrap.png";
import JavaScript from "/assets/tools/js.png";
import Postman from "/assets/tools/postman.webp";
import Github from "/assets/tools/github.png";
import Wordpress from "/assets/tools/wordpress.png";
import Sql from "/assets/tools/sql.png";
import Figma from "/assets/tools/figma.png";
import Gsap from "/assets/tools/gsap.png";
import Notion from "/assets/tools/notion.png";
import Elementor from "/assets/tools/elementor.png";

export const listTools = [
  {
    id: 1,
    gambar: VsCode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
    warna: "#22A6F1",
  },
  {
    id: 2,
    gambar: ReactJs,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
    warna: "#61DAFB",
  },
  {
    id: 3,
    gambar: Katalon,
    nama: "Katalon",
    ket: "Automation Testing",
    dad: "300",
    warna: "#19D89F",
  },
  {
    id: 4,
    gambar: Tailwind,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
    warna: "#38BDF8",
  },
  {
    id: 5,
    gambar: Bootstrap,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
    warna: "#7811F8",
  },
  {
    id: 6,
    gambar: JavaScript,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
    warna: "#F7DF1E",
  },
  {
    id: 7,
    gambar: Postman,
    nama: "Postman",
    ket: "API Testing",
    dad: "700",
    warna: "#EE6D3F",
  },
  {
    id: 8,
    gambar: Github,
    nama: "Github",
    ket: "Repository",
    dad: "800",
    warna: "#1B1F23",
  },
  {
    id: 9,
    gambar: Wordpress,
    nama: "Wordpress",
    ket: "CMS",
    dad: "900",
    warna: "#21759B",
  },
  {
    id: 10,
    gambar: Elementor,
    nama: "Elementor",
    ket: "CMS Plugin",
    dad: "1000",
    warna: "#92003B",
  },
  {
    id: 11,
    gambar: Figma,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
    warna: "#FF3737",
  },
  {
    id: 12,
    gambar: Gsap,
    nama: "Gsap",
    ket: "Javascript Library",
    dad: "1200",
    warna: "#93D400",
  },
  {
    id: 13,
    gambar: Notion,
    nama: "Notion",
    ket: "Bug Management",
    dad: "1300",
    warna: "#000000",
  },
  {
    id: 14,
    gambar: Sql,
    nama: "Sql",
    ket: "Database",
    dad: "1400",
    warna: "#DB7533",
  },
];

import YouApp from "/assets/proyek/youapp.webp";
import KatalonProject from "/assets/proyek/katalon.webp";
import Boogie from "/assets/proyek/boogie.webp";
import Portofolio from "/assets/proyek/portofolio.webp";
import Wearpack from "/assets/proyek/wearpack.webp";
import Kaos from "/assets/proyek/kaos.webp";
import Jersey from "/assets/proyek/jersey.webp";
import Varsity from "/assets/proyek/varsity.webp";
import Katalog from "/assets/proyek/katalog.webp";
import Aksesmu from "/assets/proyek/aksesmu.webp";
import Instansi from "/assets/proyek/seragam-kerja-instansi.webp";
import SetorTunai from "/assets/proyek/setor-tunai.webp";

export const listProyek = [
  {
    id: 1,
    gambar: YouApp,
    nama: "Test Case YouApp (CRUD)",
    desk: "Melakukan pengujian fungsional fitur CRUD (Create, Read, Update, Delete) pada aplikasi mobile YouApp versi Android. Mencakup pembuatan test case, eksekusi manual testing, pelaporan bug.",
    tools: ["Manual Testing", "Excel", "Test Case"],
    link: "https://docs.google.com/spreadsheets/d/1puaYb1uqsGnWSCYYqBCSaXQsBR31ikuo3PaKCFKyjhY/edit?usp=sharing",
    dad: "100",
  },
  {
    id: 2,
    gambar: KatalonProject,
    nama: "Katalon Dummy Case Automatic Testing",
    desk: "Membuat dan mengeksekusi automated test case menggunakan Katalon Studio pada skenario dummy sebagai simulasi pengujian fungsional aplikasi. Mencakup perancangan test suite dan konfigurasi eksekusi otomatis",
    tools: ["Automation Testing", "Katalon Studio", "Test Case"],
    link: "https://docs.google.com/spreadsheets/d/1GsP0Mj4LHsvvBPw48O1kwY7abCd4Qy1C/edit?usp=sharing&ouid=100667546863111612527&rtpof=true&sd=true",
    dad: "200",
  },
  {
    id: 3,
    gambar: SetorTunai,
    nama: "Test Case Stor Tunai di ATM",
    desk: "Menyusun test case manual testing untuk fitur Setor Tunai di mesin ATM, mencakup skenario normal dan edge case, didokumentasikan dalam format spreadsheet untuk keperluan QA.",
    tools: ["Manual Testing", "Excel", "Test Case"],
    link: "https://docs.google.com/spreadsheets/d/1aVIRMJAfiv1WMWc1q6wTivJHFS0KwUxDGsel1_Ojm80/edit?usp=sharing",
    dad: "300",
  },
  {
    id: 4,
    gambar: Aksesmu,
    nama: "Test Case Aksesmu APP (Registration)",
    desk: "Melakukan pengujian manual pada fitur registrasi aplikasi Aksesmu, mencakup pembuatan test case dan eksekusi pengujian.",
    tools: ["Manual Testing", "Excel", "Test Case"],
    link: "https://docs.google.com/spreadsheets/d/1HiI_wmAFe-RgEben5hQwjRDa1tNMfHtQ5h2CfAZXC5E/edit?usp=sharing",
    dad: "400",
  },
  {
    id: 5,
    gambar: Wearpack,
    nama: "Landing Page Wearpack",
    desk: "Mendesain dan membangun landing page produk Wearpack Safety menggunakan WordPress dan Elementor. Mencakup hero section, galeri produk, testimoni klien besar (Pertamina, Samsung, PLN), FAQ, dan form konsultasi terintegrasi.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3"],
    link: "https://boogieapparel.co.id/wearpack-safety/",
    dad: "500",
  },
  {
    id: 6,
    gambar: Kaos,
    nama: "Landing Page Kaos",
    desk: "Mendesain dan membangun landing page produk kaos custom menggunakan WordPress dan Elementor. Mencakup hero section, showcase produk (kaos event, merchandise, jersey, safety), testimoni klien korporat, step pemesanan, FAQ, dan form konsultasi terintegrasi WhatsApp.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3"],
    link: "https://boogieapparel.co.id/konveksi-kaos-custom/",
    dad: "600",
  },
  {
    id: 7,
    gambar: Jersey,
    nama: "Landing Page Jersey",
    desk: "Mendesain dan membangun landing page produk seragam jersey custom menggunakan WordPress dan Elementor, menampilkan katalog produk, keunggulan bahan, dan CTA konsultasi untuk kebutuhan B2B.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3"],
    link: "https://boogieapparel.co.id/seragam-jersey/",
    dad: "700",
  },
  {
    id: 8,
    gambar: Varsity,
    nama: "Landing Page Jaket Varsity",
    desk: "Mendesain dan membangun landing page produk jaket varsity custom menggunakan WordPress dan Elementor, mencakup showcase produk, detail fitur, testimoni klien, dan form konsultasi untuk kebutuhan pengadaan perusahaan.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3", "GSAP"],
    link: "https://boogieapparel.co.id/jaket-varsity-custom",
    dad: "800",
  },
  {
    id: 9,
    gambar: Katalog,
    nama: "Landing Page Katalog",
    desk: "Mendesain dan membangun halaman katalog produk interaktif menggunakan WordPress dan Elementor, dilengkapi fitur search dan filter untuk memudahkan calon klien B2B menemukan produk sesuai kebutuhan.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3", "GSAP"],
    link: "https://boogieapparel.co.id/katalog",
    dad: "900",
  },
  {
    id: 10,
    gambar: Portofolio,
    nama: "Landing Page Portofolio",
    desk: "Mendesain dan membangun landing page portfolio untuk PT Boogie Apparel Indonesia menggunakan WordPress dan Elementor. Halaman menampilkan galeri hasil produksi dan klien perusahaan dengan layout visual yang dirancang dari awal untuk memperkuat kredibilitas brand di hadapan calon klien B2B.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3"],
    link: "https://boogieapparel.co.id/portfolio/",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Instansi,
    nama: "Landing Page Seragam Kerja Instansi",
    desk: "Mendesain dan membangun halaman seragam kerja instansi menggunakan WordPress dan Elementor, yang difokuskan untuk kien dari instansi pemerintahan.",
    tools: ["Wordpress", "Elementor", "JavaScript", "CSS3"],
    link: "https://boogieapparel.co.id/seragam-kerja-instansi",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Boogie,
    nama: "Boogie Apparel",
    desk: "Membangun website company profile resmi PT Boogie Apparel Indonesia menggunakan WordPress dan Elementor. Website mencakup katalog produk seragam kerja, safety, dan medis, lengkap dengan halaman portofolio, artikel, karir, dan informasi perusahaan untuk kebutuhan B2B.",
    tools: ["Wordpress", "Elementor", "JavaScript", "GSAP", "CSS3"],
    link: "https://boogieapparel.co.id/",
    dad: "1200",
  },
];
