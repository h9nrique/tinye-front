import React from "react";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-2">
      <div className="px-4 md:px-8 m-auto flex flex-row justify-between">
        <Link href="/" className="flex gap-x-2 items-center">
          <FaLink className="text-blue-300 mt-1" size={20} />
          <h1 className="text-2xl font-bold text-cyan-950">Tinye.me</h1>
        </Link>
        <div>
          <Link href="/register">Criar conta</Link>
          <Link href="/login" className="px-8">
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
