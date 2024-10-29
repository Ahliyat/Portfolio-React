import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigations}>
        <h3>Ahliyat&apos;s Portfolio</h3>
        <section id="nav-items" className={styles.navItems}>
          <NavLink id="nav-item" className={styles.navItem} to="#homepage">
            Homepage
          </NavLink>
          <NavLink id="nav-item" className={styles.navItem} to="#skills">
            Skills
          </NavLink>
          <NavLink id="nav-item" className={styles.navItem} to="#projects">
            Projects
          </NavLink>
          <Button className={styles.navbtn}>DOWNLOAD MY CV</Button>
        </section>
        <div id="fa-bars" className={styles.barsIcon}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
