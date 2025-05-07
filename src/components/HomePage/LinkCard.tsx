import React, { useState } from "react";
import { LinkType } from "@/types/links/LinkType";
import Link from "next/link";
import FaviconLinks from "./FaviconLinks";
import { Button } from "../ui/button";
import { FaCopy } from "react-icons/fa6";
import { toast } from "sonner";

export default function LinkCard({ link }: { link: LinkType }) {
  const [copied, setCopied] = useState(false);
  const completeLink = "http://localhost:3000/" + link.shortLink;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(completeLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto:", err);
        toast("Erro ao copiar o texto", {
          description: "Algo deu errado. Por favor, tente novamente.",
        });
      });
  };

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
      <Button
        onClick={copyToClipboard}
        className="w-full md:w-auto"
        disabled={copied}
      >
        {copied ? (
          "Copiado!"
        ) : (
          <>
            <FaCopy /> Copiar
          </>
        )}
      </Button>
    </div>
  );
}
