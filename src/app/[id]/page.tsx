import { handleRedirectAction } from "@/actions/handleRedirectAction";
import LinkDoesNotExist from "@/components/exceptions/LinkDoesNotExist";
import { LinkType } from "@/types/links/LinkType";
import { HttpResponseType } from "@/types/ResponseTypes";
import { redirect } from "next/navigation";

const handleRedirect = async (id: string) => {
  const response = await handleRedirectAction(id);

  if (response.type === HttpResponseType.ERROR) {
    return;
  }

  if (response.type === HttpResponseType.SUCCESS) {
    const responseData = response.data as LinkType;
    redirect(responseData.originalLink);
  }
};

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await handleRedirect(id);

  return <LinkDoesNotExist />;
}
