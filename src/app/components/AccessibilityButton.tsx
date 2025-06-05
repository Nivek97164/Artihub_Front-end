"use client"; // Pour activer le state côté client

import { useState } from "react";
import Image from "next/image";

const AccessibilityButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Ouvrir les options d'accessibilité"
        className="fixed top-1/3 left-0 z-50 bg-[#7d1524] text-white rounded-r-full shadow-lg px-3 py-2 flex items-center focus:outline-none"
        tabIndex={0}
        style={{ minWidth: 44, minHeight: 44 }}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex items-center justify-center">
          <Image
            src="/homepage/accessibilité.png"
            alt="Accessibilité"
            width={28}
            height={28}
            style={{ display: "block" }}
          />
        </span>
      </button>
      {/* Panneau d'accessibilité affiché si open === true */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-[#7d1524] font-bold text-xl"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#7d1524]">Accessibilité</h2>
            <ul className="space-y-4">
              <li>
                <button className="text-[#7d1524] font-medium hover:underline">Contraste élevé</button>
              </li>
              <li>
                <button className="text-[#7d1524] font-medium hover:underline">Augmenter la taille du texte</button>
              </li>
              <li>
                <button className="text-[#7d1524] font-medium hover:underline">Navigation clavier</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityButton;
