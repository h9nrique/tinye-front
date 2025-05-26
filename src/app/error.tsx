"use client";
import Container from "@/components/ui/Container";

// Error boundaries must be Client Components

export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container>
      <h2>Algo deu errado!</h2>
      <button onClick={() => reset()}>Try again</button>
    </Container>
  );
}
