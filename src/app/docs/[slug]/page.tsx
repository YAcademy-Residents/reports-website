"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RedirectPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const slug = pathname.replace("/docs/", "");
      if (!slug) return;

      window.location.href = `https://reports.yaudit.dev${slug}`;
    }
  }, [pathname]);

  return (
    <></>
  );
}
