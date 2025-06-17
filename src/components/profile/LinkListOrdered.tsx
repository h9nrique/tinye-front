"use client";

import React, { useState } from "react";
import { LinkType } from "@/types/links/LinkType";
import LinkCardProfile from "./LinkCardProfile";
import CreateLink from "./CreateLink";
import Filters from "./Filters";
import LinkQuantityDisplay from "./LinkQuantityDisplay";

export type Filter = "active" | "inactive" | "all";

export default function LinkListOrdered({
  orderedLinks,
}: {
  orderedLinks: LinkType[];
}) {
  const [linkList, setLinkList] = useState<LinkType[]>(orderedLinks);
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl font-bold mb-2 ml-1">Criar um novo link</h1>
        <CreateLink setLinkList={setLinkList} />
      </div>
      <div>
        <div className="flex md:flex-row justify-between items-center mr-2">
          <div className="flex gap-x-6 items-center">
            <h2 className="text-2xl font-bold mb-2 mt-[2px] ml-1">
              Meus links
            </h2>
            <Filters
              filter={filter}
              setFilter={setFilter}
              className="hidden md:flex"
            />
          </div>
          <LinkQuantityDisplay linkList={linkList} />
        </div>
      </div>
      <Filters
        filter={filter}
        setFilter={setFilter}
        className="md:hidden flex mb-4"
      />

      {linkList.length > 0 ? (
        linkList
          .sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateB - dateA;
          })
          .filter((link) => {
            if (filter === "active") return link.active;
            if (filter === "inactive") return !link.active;
            return link;
          })
          .map((link) => {
            return (
              <LinkCardProfile
                key={link.id}
                link={link}
                setLinkList={setLinkList}
              />
            );
          })
      ) : (
        <p className=" text-gray-800 text-center mt-4">
          Você ainda não tem nenhum link criado!
        </p>
      )}
    </div>
  );
}
