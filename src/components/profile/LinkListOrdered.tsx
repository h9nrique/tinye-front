"use client";

import React, { useState } from "react";
import { LinkType } from "@/types/links/LinkType";
import LinkCardProfile from "./LinkCardProfile";
import CreateLink from "./CreateLink";
import { IoMdInformationCircle } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LinkListOrdered({
  orderedLinks,
}: {
  orderedLinks: LinkType[];
}) {
  const [orderedLinksList, setOrderedLinksList] =
    useState<LinkType[]>(orderedLinks);

  const reachedMaximunQuantity = orderedLinksList.length >= 10;

  return (
    <div className="w-full">
      <section>
        <h1 className="text-2xl font-bold mb-2 ml-1">Criar um novo link</h1>
        <CreateLink setOrderedLinksList={setOrderedLinksList} />
      </section>
      <section>
        <div className="flex justify-between items-center mr-2">
          <h2 className="text-2xl font-bold mb-2 ml-1">Meus links</h2>
          <div className="flex items-center">
            <p
              className={`${
                reachedMaximunQuantity ? "text-red-500" : "text-gray-500"
              } font-medium`}
            >
              {orderedLinksList.length}/10 links
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <IoMdInformationCircle
                  className={`ml-1 text-gray-500 ${
                    reachedMaximunQuantity ? "text-red-500" : "text-gray-500"
                  }`}
                  size={16}
                />
              </TooltipTrigger>
              <TooltipContent align="end" side="bottom" className="bg-primary">
                <p>No plano básico, o limite é de 10 links</p>
              </TooltipContent>
            </Tooltip>
          </div>
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
      </section>
    </div>
  );
}
