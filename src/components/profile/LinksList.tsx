import { HttpResponseType } from "@/types/ResponseTypes";
import { getLinksAction } from "@/actions/getLinksAction";
import { LinkType } from "@/types/links/LinkType";
import { errorHandler } from "@/utils/errorHandler";
import LinkListOrdered from "./LinkListOrdered";

const getLinks = async () => {
  const response = await getLinksAction();
  if (response.type === HttpResponseType.ERROR) {
    await errorHandler(response);
    return [] as LinkType[];
  }

  if (response.type === HttpResponseType.SUCCESS) {
    const responseData = response.data as LinkType[];
    return responseData;
  }
};

export default async function LinksList() {
  const links = await getLinks();

  return links ? (
    <LinkListOrdered orderedLinks={links} />
  ) : (
    "Você ainda não tem links criados"
  );
}
