import Link from "next/link";
import React from "react";
import { FaLinkSlash } from "react-icons/fa6";
import Container from "../ui/Container";

export default function LinkDoesNotExist() {
  return (
    <Container className="w-full flex flex-1 flex-col justify-center">
      <FaLinkSlash size={80} className="text-gray-400 mb-8" />
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Link não existe</h1>
      <p className="font-medium text-gray-700 text-center mb-4">
        O link que você tentou acessar não existe ou foi desativado pelo criador
      </p>
      <Link
        href={"/"}
        className="text-gray-700 hover:text-slate-500 hover:underline"
      >
        Voltar a página inicial
      </Link>
    </Container>
  );
}
