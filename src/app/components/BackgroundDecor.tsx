"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

export default function BackgroundDecor() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    setPositions(
      images.map(() => ({
        top: getRandom(5, 80) + "vh",
        left: getRandom(5, 85) + "vw",
        rotate: getRandom(-20, 20) + "deg",
        size: getRandom(70, 90),
        zIndex: Math.floor(getRandom(1, 4)),
        opacity: getRandom(0.5, 1.2),
      }))
    );
  }, []);

  return (
    <>
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
    </>
  );
}
