import { LinkType } from "@/types/links/LinkType";
import React from "react";
import FaviconLinks from "../HomePage/FaviconLinks";
import Link from "next/link";
import CopyLinkButton from "./CopyLinkButton";
import DeleteLinkButton from "./DeleteLinkButton";
import { formatDate } from "@/utils/formatDate";
import { FaLink } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import StatusSwitch from "./StatusSwitch";

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
    <div
      className={`w-full flex flex-col md:flex-row justify-between md:items-center bg-white mb-2 p-4 rounded-md ${
        link.active
          ? "border-2 border-input"
          : "border-2 border-transparent opacity-80"
      } `}
    >
      <div className="flex items-center gap-4 overflow-hidden mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <StatusSwitch link={link} setOrderedLinksList={setOrderedLinksList} />
          <FaviconLinks originalLink={link.originalLink} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <Link
            href={link.shortLink}
            target="_Blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-medium hover:underline truncate whitespace-nowrap overflow-hidden text-wrap"
          >
            {completeLink}
          </Link>
          <Link
            href={link.originalLink}
            target="_Blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:underline truncate whitespace-nowrap overflow-hidden text-wrap"
          >
            {link.originalLink}
          </Link>
          <div className="flex gap-3 mt-[2px] text-gray-400">
            <div className="flex items-center gap-[2px]">
              <FaLink size={16} />
              <p className="text-sm font-bold">{link.accessCount} acessos</p>
            </div>
            <div className="flex items-center gap-[2px]">
              <IoIosCalendar size={16} />
              <p className="text-sm">{formatDate(link.createdAt)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse md:flex-row gap-2 ">
        <CopyLinkButton completeLink={completeLink} link={link} />
        <DeleteLinkButton
          id={link.id}
          setOrderedLinksList={setOrderedLinksList}
        />
      </div>
    </div>
  );
}
