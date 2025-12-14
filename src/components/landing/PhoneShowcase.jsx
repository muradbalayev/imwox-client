"use client";

import Image from "next/image";
import { useState } from "react";
import appImg1 from "@/assets/appImg1.png";
import profileImg from "@/assets/profileImg.png";

const phoneScreens = [
  {
    id: "home",
    image: appImg1,
    title: "Ana Səhifə",
    description: "Paylaşımları izləyin və cəmiyyətlə əlaqə qurun"
  },
  {
    id: "profile",
    image: profileImg,
    title: "Profil",
    description: "Müzakirələr və saxlanmış paylaşımlar"
  }
];

export default function PhoneShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-linear-to-r from-imvox-blue/10 to-transparent rounded-[3rem] blur-2xl"></div>
        <div className="relative z-10 transition-all duration-500">
          <Image
            src={phoneScreens[activeScreen].image}
            alt={phoneScreens[activeScreen].title}
            width={320}
            height={660}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-3">
          {phoneScreens.map((screen, index) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeScreen === index
                  ? "bg-black scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={screen.title}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="font-semibold text-lg">{phoneScreens[activeScreen].title}</p>
          <p className="text-sm text-gray-500">{phoneScreens[activeScreen].description}</p>
        </div>
      </div>
    </div>
  );
}
