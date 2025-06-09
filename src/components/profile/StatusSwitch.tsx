import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { LinkType } from "@/types/links/LinkType";
import { changeLinkActiveAction } from "@/actions/changeLinkActiveAction";
import { HttpResponseType } from "@/types/ResponseTypes";
import { toast } from "sonner";

type StatusSwitchProps = {
  link: LinkType;
  setOrderedLinksList: React.Dispatch<React.SetStateAction<LinkType[]>>;
};

export default function StatusSwitch({
  link,
  setOrderedLinksList,
}: StatusSwitchProps) {
  const [checked, setChecked] = useState(link.active);
  const [isLoading, setIsLoading] = useState(false);

  const changeLinkActive = async () => {
    setIsLoading(true);
    const { id } = link;
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading delay
    const response = await changeLinkActiveAction({ id });
    if (response.type === HttpResponseType.ERROR) {
      setIsLoading(false);
      return toast.error("Não foi possível desativar o link", {
        description: "Tente novamente mais tarde",
      });
    }

    if (response.type === HttpResponseType.SUCCESS) {
      const updatedLink = response.data as LinkType;

      setChecked(updatedLink.active);
      setIsLoading(false);
      setOrderedLinksList((prevLinks) => {
        return prevLinks.map((l) => {
          if (l.id === link.id) {
            return { ...l, active: updatedLink.active };
          }
          return l;
        });
      });
      return toast.success("Status do link alterado com sucesso");
    }
  };

  return (
    <Switch
      checked={checked}
      onCheckedChange={() => changeLinkActive()}
      disabled={isLoading}
    />
  );
}
