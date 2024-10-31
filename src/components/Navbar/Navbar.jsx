import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";

const navItems = [
  {
    id: 1,
    title: "Homepage",
    path: "#homepage",
  },
  {
    id: 2,
    title: "Skills",
    path: "#skills",
  },
  {
    id: 3,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 4,
    title: "Projects",
    desc: "DOWNLOAD MY CV",
  },
];


const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigations}>
        <h3>Ahliyat&apos;s Portfolio</h3>
        <section className={styles.navItems}>
          {navItems.map((item) => (
            <section key={item.id} id="nav-items" className={styles.navItemsContainer}>
              <NavLink id="nav-item" className={styles.navItem} to={item.path}>
                {item.title}
              </NavLink>
            </section>
          ))}
          <Button className={styles.navbtn}>DOWNLOAD MY CV</Button>
          <div id="fa-bars" className={styles.barsIcon}>
            <FaBars />
          </div>
        </section>
      </nav>
    </header>
  );
};
export default Navbar;
