import React from "react";
import LinksSection from "./LinksSection";
import { FaLink } from "react-icons/fa6";
import Container from "../ui/Container";

export default function LinksHomePage() {
  return (
    <Container>
      <div className="flex gap-x-2 items-center mb-4 m-auto">
        <FaLink className="text-blue-300 mt-1" size={40} />
        <h1 className="text-5xl font-bold text-cyan-950">Tinye.me</h1>
      </div>

      <h3 className="text-xl text-center font-medium mb-6 px-4 text-gray-500 text-pretty">
        Profissionalize seus links. Simples, rápido e eficiente.
      </h3>

      <LinksSection />
    </Container>
  );
}
