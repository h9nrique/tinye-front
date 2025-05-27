import { LinkType } from "@/types/links/LinkType";
import React from "react";
import FaviconLinks from "../HomePage/FaviconLinks";
import Link from "next/link";

export default function LinkCardProfile({ link }: { link: LinkType }) {
  const completeLink = "http://localhost:3000/" + link.shortLink;

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center bg-white mb-2 p-4 border-2 border-input rounded-md overflow-hidden gap-y-2">
      <div className="flex flex-row items-center gap-x-4">
        <FaviconLinks originalLink={link.originalLink} />
        <div className="flex flex-col overflow-hidden">
          <Link
            href={link.shortLink}
            target="_Blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-medium hover:underline"
          >
            {completeLink}
          </Link>
          <Link
            href={link.originalLink}
            target="_Blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-nowrap overflow-hidden text-ellipsis hover:underline"
          >
            {link.originalLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
