import React from "react";

import { getLinksAction } from "@/actions/getLinksAction";
import { LinkType } from "@/types/links/LinkType";
import { HttpResponseType } from "@/types/ResponseTypes";
import LinkCardProfile from "./LinkCardProfile";

const getLinks = async () => {
  const response = await getLinksAction();
  // Simulating a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (response.type === HttpResponseType.ERROR) {
    return [] as LinkType[];
  }

  if (response.type === HttpResponseType.SUCCESS) {
    const responseData = response.data as LinkType[];
    return responseData;
  }
};

export default async function LinksList() {
  const links = await getLinks();

  return (
    <div>
      {links
        ? links.map((link) => {
            return <LinkCardProfile key={link.id} link={link} />;
          })
        : "Você ainda não tem links"}
    </div>
  );
}
