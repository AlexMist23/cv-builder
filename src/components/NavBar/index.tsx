"use client";

import Link from "next/link";
import styles from "./navBar.module.css";
import { usePathname } from "next/navigation";

interface navListEl {
  name: string;
  path: string;
}

const navList: navListEl[] = [
  { name: "en", path: "/en" },
  { name: "pl", path: "/pl" },
  { name: "pl-general", path: "/pl-general" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navList.map(({ path, name }) => (
          <Link
            key={path}
            href={path}
            className={`${styles.navListEl} ${
              pathname === path ? styles.active : ""
            }`}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
