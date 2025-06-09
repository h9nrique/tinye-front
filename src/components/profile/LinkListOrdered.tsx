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

  return orderedLinksList
    .sort((a, b) => {
      if (a.active !== b.active) {
        return a.active ? -1 : 1;
      }
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    })
    .map((link) => {
      return (
        <LinkCardProfile
          key={link.id}
          link={link}
          setOrderedLinksList={setOrderedLinksList}
        />
      );
    });
}
