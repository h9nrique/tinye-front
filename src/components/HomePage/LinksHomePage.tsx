import React from "react";
import LinksSection from "./LinksSection";

export default function LinksHomePage() {
  return (
    <div className="flex flex-col items-center min-h-svh px-6 max-w-[1024px] mx-auto">
      <h1 className="text-5xl font-bold text-cyan-950 mt-20 md:mt-36 mb-4">
        Tinye.me
      </h1>
      <h3 className="text-xl text-center font-medium mb-6 px-4 text-gray-500 text-pretty">
        Profissionalize seus links. Simples, rápido e eficiente.
      </h3>
      <LinksSection />
    </div>
  );
}
