import React from "react";
import CreateLinkInput from "./CreateLinkInput";

export default function LinksHomePage() {
  return (
    <div className="flex flex-col items-center min-h-svh">
      <h1 className="text-5xl font-bold text-cyan-950 mt-48 mb-4">Tinye.me</h1>
      <h3 className="text-xl font-medium mb-6 text-gray-500">
        Profissionalize seus links. Simples, rápido e eficiente.
      </h3>
      <CreateLinkInput />
    </div>
  );
}
