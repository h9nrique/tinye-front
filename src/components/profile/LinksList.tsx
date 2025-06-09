import { HttpResponseType } from "@/types/ResponseTypes";
import { getLinksAction } from "@/actions/getLinksAction";
import { LinkType } from "@/types/links/LinkType";
import { errorHandler } from "@/utils/errorHandler";
import LinkListOrdered from "./LinkListOrdered";

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
  const orderedLinks = links?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return orderedLinks ? (
    <LinkListOrdered orderedLinks={orderedLinks} />
  ) : (
    "Você ainda não tem links criados"
  );
}
