"use client";

import React, { useState } from "react";
import { LinkType } from "@/types/links/LinkType";
import LinkCardProfile from "./LinkCardProfile";
import CreateLink from "./CreateLink";

export default function LinkListOrdered({
  orderedLinks,
}: {
  orderedLinks: LinkType[];
}) {
  const [orderedLinksList, setOrderedLinksList] =
    useState<LinkType[]>(orderedLinks);

  return (
    <div>
      <CreateLink setOrderedLinksList={setOrderedLinksList} />
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Meus links</h1>
      </div>
      {orderedLinksList
        .sort((a, b) => {
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
        })}
    </div>
  );
}
