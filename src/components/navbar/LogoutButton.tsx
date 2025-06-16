"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions/logoutAction";
import { AiOutlineLoading } from "react-icons/ai";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await logoutAction();
  };

  return (
    <form action={handleLogout}>
      <Button>
        {isLoading ? <AiOutlineLoading className="animate-spin" /> : "Sair"}
      </Button>
    </form>
  );
}
