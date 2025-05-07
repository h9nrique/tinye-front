import { useEffect, useState } from "react";
import { Link } from "@/types/links/LinkType";

const STORAGE_KEY = "user_links";

export function useStoredLinks() {
  const [links, setLinks] = useState<Link[]>([]);

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  const addLink = (newLink: Link) => {
    setLinks((prev) => [newLink, ...prev]);
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const clearLinks = () => {
    setLinks([]);
  };

  return {
    links,
    addLink,
    removeLink,
    clearLinks,
  };
}
