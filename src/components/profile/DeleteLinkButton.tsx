import React from "react";
import { Button } from "../ui/button";
import { FaTrash } from "react-icons/fa6";

export default function DeleteLinkButton() {
  return (
    <Button variant="destructive">
      <FaTrash />
    </Button>
  );
}
