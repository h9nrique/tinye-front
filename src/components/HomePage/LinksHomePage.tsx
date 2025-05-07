import React from "react";
import LinksSection from "./LinksSection";
import { FaLink } from "react-icons/fa6";

export default function LinksHomePage() {
  return (
    <div className="flex flex-col items-center min-h-svh px-6 max-w-[1024px] mx-auto">
      <div className="mt-20 md:mt-36 flex gap-x-2 items-center mb-4">
        <FaLink className="text-blue-300 mt-1" size={40} />
        <h1 className="text-5xl font-bold text-cyan-950">Tinye.me</h1>
      </div>

      <h3 className="text-xl text-center font-medium mb-6 px-4 text-gray-500 text-pretty">
        Profissionalize seus links. Simples, rápido e eficiente.
      </h3>
      <LinksSection />
    </div>
  );
}
