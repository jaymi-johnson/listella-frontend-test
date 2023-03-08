import styles from "@/styles/Nav.module.css";
import Link from "next/link";
import Logo from "./logo";

const Footer = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href={"/"}>Contact Us</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Sitemap</Link>
        <Link href={"/"}>Terms & Conditions</Link>
      </div>
      <Logo layout="footer" />
    </div>
  );
};

export default Footer;
