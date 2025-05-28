"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  if (!pathname) {
    return null;
  }

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image
          src="/icons/logos.svg"
          alt="logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "50px" }}
          priority
        />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
