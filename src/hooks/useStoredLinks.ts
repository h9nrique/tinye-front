import { LinkType } from "@/types/links/LinkType";
import { useEffect, useState } from "react";

const STORAGE_KEY = "user_links";

export function useStoredLinks() {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    const storedLinks = getLinksFromStorage();
    setLinks(storedLinks);
  }, []);

  const getLinksFromStorage = () => {
    if (typeof window === "undefined") return;
    const storedLinks = localStorage.getItem(STORAGE_KEY);
    return storedLinks ? JSON.parse(storedLinks) : [];
  };

  const addLink = (newLink: LinkType) => {
    const storedLinks = getLinksFromStorage();
    const updatedLinks = [...storedLinks, newLink];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLinks));
    setLinks(updatedLinks);
  };

  const removeLink = (id: string) => {
    const storedLinks = getLinksFromStorage();
    const updatedLinks = storedLinks.filter((link: LinkType) => link.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLinks));
    setLinks(updatedLinks);
  };

  return {
    addLink,
    removeLink,
    links,
  };
}
