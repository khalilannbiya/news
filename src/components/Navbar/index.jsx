import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { CATEGORIES } from "../../constants/categories";
import styles from "./Navbar.module.css";
import newsIcon from "../../assets/news-icon.svg";

const Navbar = () => {
   const [selected, setSelected] = useState("");
   return (
      <nav className={styles.nav}>
         <div className={styles.navIconWrapper}>
            <img src={newsIcon} alt="navbar icon" className={styles.navIcon} />
            <h1 className={styles.navTitle}>NEWS</h1>
         </div>
         <div className={styles.categories}>
            {CATEGORIES.map((category, index) => {
               return (
                  <Link
                     key={index}
                     to={`/${category.slug}`}
                     onClick={() => setSelected(category.name)}
                     className={classNames(styles.category, {
                        [styles.selected]: selected === category.name,
                     })}
                  >
                     {category.name}
                  </Link>
               );
            })}
         </div>
      </nav>
   );
};

export default Navbar;
