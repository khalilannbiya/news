import React from "react";
import styles from "./Navbar.module.css";
import newsIcon from "../../assets/news-icon.svg";

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.navIconWrapper}>
            <img src={newsIcon} alt="navbar icon" className={styles.navIcon} />
            <h1 className={styles.navTitle}>NEWS</h1>
         </div>
      </nav>
   );
};

export default Navbar;
