import React from "react";
import { Button } from "../ui/button";
import { RiCloseLargeFill } from "react-icons/ri";

export default function DeleteLastLinks({
  id,
  removeLink,
}: {
  id: string;
  removeLink: (id: string) => void;
}) {
  return (
    <Button
      onClick={() => removeLink(id)}
      variant="outline"
      className="flex-1 md:w-auto hover:text-red-600"
    >
      <RiCloseLargeFill /> Remover
    </Button>
  );
}
