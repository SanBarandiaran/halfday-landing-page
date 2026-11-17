import { Suspense } from "react";
import { connection } from "next/server";
import StudioClient from "./studio-client";

async function ForceDynamic() {
  await connection();
  return null;
}

export default function StudioPage() {
  return (
    <Suspense>
      <ForceDynamic />
      <StudioClient />
    </Suspense>
  );
}
