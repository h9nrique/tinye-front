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
      <section>
        <h1 className="text-2xl font-bold mb-2 ml-1">Criar um novo link</h1>
        <CreateLink setOrderedLinksList={setOrderedLinksList} />
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-2 ml-1">Meus links</h1>
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
      </section>
    </div>
  );
}
