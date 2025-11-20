"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newUrl = `https://reports.yaudit.dev${pathname}`;
      window.location.href = newUrl;
    }
  }, [pathname]);

  return <></>;
}