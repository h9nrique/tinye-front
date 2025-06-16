"use client";

import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa6";

export default function FaviconLinks({
  originalLink,
}: {
  originalLink: string;
}) {
  const getFavicon = () => {
    try {
      const url = new URL(originalLink);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
    } catch {
      return null;
    }
  };

  const faviconUrl = getFavicon();

  if (faviconUrl)
    return (
      <Image
        src={faviconUrl}
        alt="favicon"
        className="w-6 h-6"
        width={24}
        height={24}
      />
    );

  return (
    <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-full">
      <FaLink className="text-blue-50" size={12} />
    </div>
  );
}
