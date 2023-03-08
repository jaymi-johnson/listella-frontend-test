import styles from "@/styles/Nav.module.css";
import Image from "next/image";
import Link from "next/link";

import Logo from "./logo";
import search from "../../../assets/search.svg";
import share from "../../../assets/share.svg";
import menu from "../../../assets/menu.svg";

const Header = ({}) => {
  return (
    <div>
      <Logo layout="header" />
      <div className={styles.headerLinks}>
        <Link href="/">Missions</Link>
        <Link href="/">Galleries</Link>
        <Link href="/">NASA Audience</Link>
        <Link href="/">Downloads</Link>
        <Link href="/">NASA TV</Link>
        <Link href="/">About</Link>
      </div>
      <div className={styles.headerActions}>
        <Image src={search} alt="search" />
        <Image src={share} alt="share" />
        <Image src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
