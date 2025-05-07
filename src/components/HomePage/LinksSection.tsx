"use client";

import React from "react";
import CreateLinkInput from "./CreateLinkInput";
import LastShortLinksList from "./LastShortLinksList";
import { useStoredLinks } from "@/hooks/useStoredLinks";

export default function LinksSection() {
  const { links, addLink } = useStoredLinks();

  const sortedLinks = [...links].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <>
      <CreateLinkInput addLink={addLink} />
      <LastShortLinksList links={sortedLinks} />
    </>
  );
}
