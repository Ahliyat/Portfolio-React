import styles from "./footer.module.css";
import { FaRegCopyright } from "react-icons/fa";
import {socialLinks} from "../../data.js"
import { Link } from "react-router-dom";



const CopyYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <ul className={styles.footerItems}>
        <li className={styles.footerItem}>
          <h3>Ahliyat&apos;s Portfolio</h3>
        </li>
        <li className={styles.footerItem}>
          <FaRegCopyright />
          <span className={styles.copyRight}>
            {CopyYear}
            <span>Ahliyat</span>
          </span>
        </li>
        <li className={styles.footerItem}>
          {socialLinks.map((icon) => (
            <ul key={icon.id} className={styles.socialLinks}>
              <li className={styles.socialLink}>
                <Link to={icon.path}></Link>
                <icon.icon />
              </li>
            </ul>
          ))}

        
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
