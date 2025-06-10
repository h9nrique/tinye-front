import React, { Suspense } from "react";
import Container from "@/components/ui/Container";
import LinksList from "@/components/profile/LinksList";
import LinksListsSkeleton from "@/components/profile/LinksListsSkeleton";

export default function Profile() {
  return (
    <Container>
      <Suspense fallback={<LinksListsSkeleton />}>
        <LinksList />
      </Suspense>
    </Container>
  );
}
