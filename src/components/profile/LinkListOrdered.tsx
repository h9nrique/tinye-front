"use client";

import React, { useState } from "react";
import { LinkType } from "@/types/links/LinkType";
import LinkCardProfile from "./LinkCardProfile";

export default function LinkListOrdered({
  orderedLinks,
}: {
  orderedLinks: LinkType[];
}) {
  const [orderedLinksList, setOrderedLinksList] =
    useState<LinkType[]>(orderedLinks);

  return orderedLinksList.map((link) => {
    return (
      <LinkCardProfile
        key={link.id}
        link={link}
        setOrderedLinksList={setOrderedLinksList}
      />
    );
  });
}
