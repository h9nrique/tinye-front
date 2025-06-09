import React from "react";
import LinkCardProfile from "./LinkCardProfile";
import { HttpResponseType } from "@/types/ResponseTypes";
import { getLinksAction } from "@/actions/getLinksAction";
import { LinkType } from "@/types/links/LinkType";
import { errorHandler } from "@/utils/errorHandler";

const getLinks = async () => {
  const response = await getLinksAction();
  if (response.type === HttpResponseType.ERROR) {
    console.log("error handler");
    errorHandler(response);
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
