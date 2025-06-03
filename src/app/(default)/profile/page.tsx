import React, { Suspense } from "react";
import Container from "@/components/ui/Container";
import LinksList from "@/components/profile/LinksList";

export default function Profile() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Meus links</h1>
      <Suspense fallback={<div>Carregando links...</div>}>
        <LinksList />
      </Suspense>
    </Container>
  );
}
