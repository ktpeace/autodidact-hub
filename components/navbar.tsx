import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Avatar } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import pterodactyl from "../public/images/ptero-white.png";

const navbar = () => {
  const currPage = useRouter().asPath;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <Link href="/">
          <li className={styles.homeLink}>
            <Image src={pterodactyl} alt="pterodactyl" width={50} />
            <span className={currPage === "/" ? styles.currPage : undefined}>
              Autodidactyl
            </span>
          </li>
        </Link>
        <Link href="/learn">
          <li className={currPage === "/learn" ? styles.currPage : undefined}>
            Learn
          </li>
        </Link>
        <Link href="/community">
          <li
            className={currPage === "/community" ? styles.currPage : undefined}
          >
            Community
          </li>
        </Link>
        <Link href="/profile">
          <li>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default navbar;
