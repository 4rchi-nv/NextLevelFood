"use client";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathName = usePathname();
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="Logo image" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              className={pathName.startsWith("/meals") ? classes.active : ""}
              href="/meals"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName.startsWith("/community") ? classes.active : ""
              }
              href="/community"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
