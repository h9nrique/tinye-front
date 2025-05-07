import { useEffect, useState } from "react";
import { LinkType } from "@/types/links/LinkType";

const STORAGE_KEY = "user_links";

export function useStoredLinks() {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setLinks(JSON.parse(stored));
      } catch {
        console.warn("Failed to parse stored links.");
      }
    }
  }, []);

  const addLink = (newLink: LinkType) => {
    const updatedLinks = [...links, newLink];
    setLinks(updatedLinks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLinks));
  };

  return {
    links,
    addLink,
  };
}
