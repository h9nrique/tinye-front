import { handleRedirectAction } from "@/actions/handleRedirectAction";
import LinkDoesNotExist from "@/components/exceptions/LinkDoesNotExist";
import { LinkType } from "@/types/links/LinkType";
import { ErrorResponse, HttpResponseType } from "@/types/ResponseTypes";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const handleRedirect = async (id: string) => {
  const response = await handleRedirectAction(id);

  if (response.type === HttpResponseType.ERROR) {
    const responseData = response.data as ErrorResponse;
    toast.error("Erro ao encurtar seu link", {
      description: responseData.data,
    });
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
