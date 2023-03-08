import styles from "@/styles/Nav.module.css";
import Image from "next/image";

import earthIcon from "../../../assets/earth.svg";
import earthWhiteIcon from "../../../assets/earth-white.svg";

type LogoProps = {
  // One of (header | footer) to determine css styles for the logo
  layout: "header" | "footer";
};

const Logo = ({ layout }: LogoProps) => {
  return (
    <div className={styles.logo}>
      <Image
        src={layout === "header" ? earthIcon : earthWhiteIcon}
        alt="Earth Icon"
      />
      <p className={styles[`nasa_${layout}`]}>NASA</p>
    </div>
  );
};

export default Logo;
