import React from "react";
import { LinkType } from "@/types/links/LinkType";
import Link from "next/link";

export default function LinkCard({ link }: { link: LinkType }) {
  const completeLink = "http://localhost:3000/" + link.shortLink;

  return (
    <div className="flex flex-col bg-white mb-2 p-4 border-2 border-input rounded-md">
      <Link
        href={link.shortLink}
        target="_Blank"
        rel="noopener noreferrer"
        className="text-gray-700 font-medium"
      >
        {completeLink}
      </Link>
      <Link
        href={link.originalLink}
        target="_Blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-nowrap overflow-hidden text-ellipsis"
      >
        {link.originalLink}
      </Link>
    </div>
  );
}
