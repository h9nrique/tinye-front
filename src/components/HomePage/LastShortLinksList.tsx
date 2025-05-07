import React from "react";
import { LinkType } from "@/types/links/LinkType";
import LinkCard from "./LinkCard";

export default function LastShortLinksList({ links }: { links: LinkType[] }) {
  return (
    <div className="w-full rounded-md md:border-2 border-input md:p-6">
      <h3 className="font-bold text-center text-gray-700 mt-4 md:mt-0 mb-2 md:mb-6">
        Últimos links criados por você
      </h3>

      {links.length === 0 && (
        <p className="text-center text-gray-500">Nenhum link criado ainda.</p>
      )}

      {links.slice(0, 9).map((link) => {
        return <LinkCard key={link.id} link={link} />;
      })}
    </div>
  );
}
