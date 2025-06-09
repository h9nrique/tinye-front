import { LinkType } from "@/types/links/LinkType";
import React from "react";
import FaviconLinks from "../HomePage/FaviconLinks";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";
import DeleteLinkButton from "./DeleteLinkButton";
import { formatDate } from "@/utils/formatDate";
import { FaLink } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";

type LinkCardProfileProps = {
  link: LinkType;
  setOrderedLinksList: React.Dispatch<React.SetStateAction<LinkType[]>>;
};

export default function LinkCardProfile({
  link,
  setOrderedLinksList,
}: LinkCardProfileProps) {
  const completeLink = "http://localhost:3000/" + link.shortLink;

  return (
    <div className="flex flex-row items-center bg-white mb-2 p-4 border-2 border-input rounded-md overflow-hidden gap-4">
      <FaviconLinks originalLink={link.originalLink} />
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-x-4">
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
          <div className="gap-x-2 flex">
            <CopyLinkButton completeLink={completeLink} />
            <DeleteLinkButton
              id={link.id}
              setOrderedLinksList={setOrderedLinksList}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center text-gray-400">
          <div className="flex items-center gap-x-1">
            <FaLink size={16} />
            <p className="text-sm font-bold">{link.accessCount} acessos</p>
          </div>
          <div className="flex items-center gap-x-1">
            <IoIosCalendar />
            <p className="text-sm">{formatDate(link.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
