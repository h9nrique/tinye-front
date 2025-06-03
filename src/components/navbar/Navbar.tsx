import React from "react";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const CookiesStore = await cookies();
  const token = CookiesStore.get("token");

  if (token)
    return (
      <nav className="w-full py-2 bg-white border-b border-gray-200">
        <div className="px-4 md:px-8 m-auto flex flex-row justify-between items-center">
          <Link href="/" className="flex gap-x-2 items-center">
            <FaLink className="text-blue-300 mt-1" size={20} />
            <h1 className="text-2xl font-bold text-cyan-950">Tinye.me</h1>
          </Link>
          <div>
            <Link href="/profile">Meus links</Link>
            <Link href="/" className="px-8">
              Encurtar link
            </Link>
          </div>
        </div>
      </nav>
    );

  return (
    <nav className="w-full py-2">
      <div className="px-4 md:px-8 m-auto flex flex-row justify-between items-center">
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
