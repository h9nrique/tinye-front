"use client";

import React, { useState } from "react";
import { FaLink } from "react-icons/fa6";

export default function FaviconLinks({
  originalLink,
}: {
  originalLink: string;
}) {
  const [hasError, setHasError] = useState(false);

  const getFavicon = () => {
    try {
      const url = new URL(originalLink);
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
    } catch {
      return null;
    }
  };

  const faviconUrl = getFavicon();

  if (!faviconUrl || hasError) {
    return (
      <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-full">
        <FaLink className="text-blue-50" size={12} />
      </div>
    );
  }

  return (
    <img
      src={faviconUrl}
      alt="favicon"
      className="w-6 h-6"
      onError={() => setHasError(true)}
    />
  );
}
