"use client";
import Container from "@/components/ui/Container";

type ErrorBoundaryProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ reset }: ErrorBoundaryProps) {
  return (
    <Container>
      <h2>Algo deu errado!</h2>
      <button onClick={() => reset()}>Try again</button>
    </Container>
  );
}
