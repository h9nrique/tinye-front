"use client";

import React from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions/logoutAction";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <Button>Sair</Button>
    </form>
  );
}
