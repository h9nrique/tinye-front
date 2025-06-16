import React from "react";
import { IoIosClose } from "react-icons/io";

export default function DeleteLastLinks({
  id,
  removeLink,
}: {
  id: string;
  removeLink: (id: string) => void;
}) {
  return (
    <button
      onClick={() => removeLink(id)}
      className="cursor-pointer ml-1 md:ml-2 hover:text-red-600 transition-colors duration-200"
    >
      <IoIosClose size={24} />
    </button>
  );
}
