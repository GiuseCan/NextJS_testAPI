import { LayoutProps } from "@/models";
import Link from "next/link";
import * as React from "react";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <h1>Main Layout</h1>

        <Link href="/" passHref>
          HOME
        </Link>
        <Link href="/about" passHref>
          ABOUT
        </Link>

        <div>{children}</div>
      </div>
    </div>
  );
}
