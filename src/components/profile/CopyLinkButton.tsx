import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { FaCopy } from "react-icons/fa6";

export default function CopyLinkButton({
  completeLink,
}: {
  completeLink: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(completeLink)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto:", err);
        toast("Erro ao copiar o texto", {
          description: "Algo deu errado. Por favor, tente novamente.",
        });
      });
  };

  return (
    <Button onClick={copyToClipboard} className="md:w-auto" disabled={copied}>
      {copied ? (
        "Copiado!"
      ) : (
        <>
          <FaCopy /> Copiar
        </>
      )}
    </Button>
  );
}
