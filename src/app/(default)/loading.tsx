import Container from "@/components/ui/Container";
import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

export default function loading() {
  return (
    <Container>
      <RiLoader2Fill className="animate-spin" size={32} />
    </Container>
  );
}
