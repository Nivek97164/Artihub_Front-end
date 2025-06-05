"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/login/Fichier 1-8.png",
  "/login/Fichier 2-8.png",
  "/login/Fichier 3-8.png",
  "/login/Fichier 5-8 2.png",
  "/login/Fichier 7-8 2.png",
  "/login/Fichier 8-8 2.png",
  "/login/Fichier 9-8 2.png",
  "/login/Fichier 11-8 1.png",
];

type Position = {
  top: string;
  left: string;
  rotate: string;
  size: number;
  zIndex: number;
  opacity: number;
};

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function EspaceProPage() {
  const router = useRouter();
  const [positions, setPositions] = useState<Position[]>([]);
  const [checking, setChecking] = useState(true);

  // Check si déjà connecté
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("https://www.artihub.fr/auth/me.php", {
          credentials: "include",
        });
        if (res.ok) {
          const user = await res.json();
          if (user.role === "artisan") {
            router.replace("/espace-pro/espace-artisan/parametre-compte");
            return;
          } else if (user.role === "particulier") {
            router.replace("/espace-pro/espace-particulier/parametre-compte");
            return;
          }
        }
      } catch {}
      setChecking(false); // Affiche la page normale si pas connecté
    }
    checkAuth();
    setPositions(
      images.map(() => ({
        top: getRandom(5, 80) + "vh",
        left: getRandom(5, 85) + "vw",
        rotate: getRandom(-20, 20) + "deg",
        size: getRandom(70, 71),
        zIndex: Math.floor(getRandom(1, 4)),
        opacity: getRandom(1, 2),
      }))
    );
  }, [router]);

  if (checking) {
    // Spinner centré pendant la vérification
    return (
      <main className="min-h-screen flex items-center justify-center">
        <span className="animate-spin h-10 w-10 border-4 border-[#7d1524] border-t-transparent rounded-full" />
      </main>
    );
  }

  // PAGE NORMALE dessous
  return (
    <main className="min-h-screen flex flex-col items-center pt-46 relative overflow-hidden">
      {/* Images décoratives */}
      {positions.length === images.length &&
        images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={positions[i].size}
            height={positions[i].size}
            style={{
              position: "absolute",
              top: positions[i].top,
              left: positions[i].left,
              transform: `rotate(${positions[i].rotate})`,
              zIndex: positions[i].zIndex,
              opacity: positions[i].opacity,
              pointerEvents: "none",
            }}
            draggable={false}
          />
        ))}

      <h2 className="text-2xl md:text-3xl font-bold text-[#7d1524] text-center mb-6 md:mb-8">
        Quel type de compte souhaitez-vous créer ?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 mb-4 md:mb-6 z-10">
        {/* Carte Artisan */}
        <button
          className="
            bg-[#7d1524] hover:bg-[#5d0e19] 
            rounded-[3rem] 
            flex flex-col justify-end items-center 
            px-4 md:px-12 py-4 md:py-8 
            text-white shadow transition
           w-50 h-54 md:w-[300px] md:h-[280px]
          "
          onClick={() => router.push("/espace-pro/register-artisan")}
        >
          <div className="flex-1 flex flex-col justify-end items-center w-full">
            <Image
              src="/login/Fichier 3 1.png"
              alt="Artisan"
              width={130}
              height={150}
              className="object-contain object-bottom md:w-[170px] md:h-[180px]"
              priority
            />
          </div>
          <div className="w-full mt-1 md:mt-4 flex justify-center items-end h-8 md:h-10">
            <span className="text-base md:text-lg font-bold">Artisan</span>
          </div>
        </button>
        {/* Carte Particulier */}
        <button
          className="
            bg-[#7d1524] hover:bg-[#5d0e19] 
            rounded-[3rem] 
            flex flex-col justify-end items-center 
            px-4 md:px-12 py-4 md:py-8 
            text-white shadow transition
            w-50 h-54 md:w-[300px] md:h-[280px]
          "
          onClick={() => router.push("/espace-pro/register-particulier")}
        >
          <div className="flex-1 flex flex-col justify-end items-center w-full">
            <Image
              src="/login/Fichier 4 1.png"
              alt="Particulier"
              width={130}
              height={150}
              className="object-contain object-bottom md:w-[170px] md:h-[180px]"
              priority
            />
          </div>
          <div className="w-full mt-1 md:mt-4 flex justify-center items-end h-8 md:h-10">
            <span className="text-base md:text-lg font-bold">Particulier</span>
          </div>
        </button>
      </div>
      <div className="text-center mt-2 z-10">
        Vous avez déjà un compte ?{" "}
        <a
          href="/espace-pro/login"
          className="text-[#7d1524] underline hover:text-[#5d0e19]"
        >
          Connexion
        </a>
      </div>
    </main>
  );
}
