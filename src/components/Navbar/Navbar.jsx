import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Button from "../Button/Button";
import { navItems } from "../../data";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigations}>
        <h3>Ahliyat&apos;s Portfolio</h3>
        <section className={styles.navItems}>
          {navItems.map((item) => (
            <section
              key={item.id}
              id="nav-items"
              className={styles.navItemsContainer}
            >
              <NavLink id="nav-item" className={styles.navItem} to={item.path}>
                {item.title}
              </NavLink>
            </section>
          ))}
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
