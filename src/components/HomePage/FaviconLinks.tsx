import Image from "next/image";
import { useState } from "react";

type FaviconLinksProps = {
  originalLink: string;
};

export default function FaviconLinks({ originalLink }: FaviconLinksProps) {
  const url = new URL(originalLink);
  const [faviconUrl, setFaviconUrl] = useState(
    `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`
  );

  return (
    <Image
      src={faviconUrl}
      alt="favicon"
      className="w-6 h-6 rounded-full"
      width={24}
      height={24}
      onError={() => {
        setFaviconUrl("/fallback-icon.jpg");
      }}
    />
  );
}
