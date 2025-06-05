import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#f7ccc4] py-10 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-center md:items-start">
      
      {/* Colonne 1 : Logo */}
      <div className="flex justify-center md:justify-start w-full">
        <Link href="/" className="block">
          <Image
            src="/header/logo.png"
            alt="ArtiHub"
            width={180}
            height={90}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Colonne 2 : Navigation interne */}
      <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left text-[#7d1524] font-medium">
        <Link href="/nos-services">Nos services</Link>
        <Link href="/artisans-chantiers?express=true">Artisans & Chantiers</Link>
        <Link href="/contact">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Colonne 3 : Réseaux + mentions */}
      <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left text-[#7d1524] font-medium">
        <span>Suivez-nous</span>
        <div className="flex gap-4 mb-2 justify-center md:justify-start">
          <a
            href="https://www.facebook.com/people/Artihub/61575770343740/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#7d1524] rounded-full p-2 shadow-md text-xl hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/artihubofficiel/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#7d1524] rounded-full p-2 shadow-md text-xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/artihub/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#7d1524] rounded-full p-2 shadow-md text-xl hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/conditions-generales">Conditions générales</Link>
      </div>

      {/* Colonne 4 : Newsletter */}
      <div className="w-full flex justify-center md:justify-start">
        <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-xs text-center md:text-left">
          <div className="text-base mb-2 text-[#1f1f1f]">Abonnez-vous à la newsletter</div>
          <input
            type="email"
            placeholder="Entrer votre adresse e-mail"
            className="rounded-full border border-[#7d1524] px-6 py-3 w-full outline-none focus:ring-2 focus:ring-[#7d1524] bg-white text-center mx-auto"
          />
          <label className="flex items-center gap-2 text-base mt-2 cursor-pointer justify-center md:justify-start">
            <input
              type="checkbox"
              className="form-checkbox accent-[#7d1524] w-5 h-5 border-[#7d1524]"
            />
            <span>
              J’accepte de m’inscrire à la newsletter <span className="font-bold">Artihub</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
