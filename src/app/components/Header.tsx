'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Nos services', href: '/nos-services' },
    { label: 'Artisans & Chantiers', href: '/artisans-chantiers' },
    { label: 'Publier un projet', href: '/publier-projet/etape1' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow">
      <div className="flex items-center justify-between py-6 px-4 sm:px-8 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/header/logo.png"
            alt="ArtiHub"
            width={160}
            height={76}
            className="block cursor-pointer"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'relative text-[#7d1524] text-lg font-semibold transition hover:opacity-90',
                  isActive &&
                    'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#7d1524] after:rounded-full'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5 ml-10">
          <FaSearch className="text-[#7d1524] text-2xl cursor-pointer" />
          <Link
            href="/espace-pro"
            className="flex items-center gap-2 bg-[#7d1524] text-white px-6 py-2 min-w-[140px] rounded-full shadow-md text-lg font-semibold hover:bg-[#5d0e19] transition"
          >
            <FaUser />
            Espace pro
          </Link>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-2">
          <FaSearch className="text-[#7d1524] text-xl cursor-pointer mr-2" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#7d1524] text-3xl focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-30"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col py-10 px-8 z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[#7d1524] text-2xl absolute top-4 right-4"
              aria-label="Fermer le menu"
            >
              <FaTimes />
            </button>

            <nav className="flex flex-col gap-8 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'text-[#7d1524] text-lg font-semibold',
                    pathname.startsWith(item.href) && 'underline underline-offset-4'
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/espace-pro"
                className="flex items-center gap-2 bg-[#7d1524] text-white px-6 py-2 min-w-[140px] rounded-full shadow-md text-lg font-semibold hover:bg-[#5d0e19] transition"
              >
                <FaUser />
                Espace pro
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
