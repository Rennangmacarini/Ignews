import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg"
import { SigninButton } from "../SigninButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <Image src={logo} alt=" ignews seu blog de tecnologia" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Post</a>
        </nav>

        <SigninButton/>
      </div>
    </header>
  );
}
