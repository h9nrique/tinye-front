import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-2">
      <div className="px-4 md:px-8 m-auto">
        <p className="text-sm text-center">
          © {currentYear} Tinye.me. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
