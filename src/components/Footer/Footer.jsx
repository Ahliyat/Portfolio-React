import styles from "./footer.module.css";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
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
          <ul className={styles.socialLinks}>
            <li className={styles.socialLink}>
              <FaWhatsapp />
              <Link to="https://wa.link/p6ftmd"></Link>
            </li>
            <li className={styles.socialLink}>
              <FaXTwitter />
              <Link to="https://x.com/Ah_liyat"></Link>
            </li>
            <li className={styles.socialLink}>
              <FaLinkedin />
              <Link to="https://www.linkedin.com/in/ahliyat-orenuga-56ab43293/"></Link>
            </li>
            <li className={styles.socialLink}>
              <FaGithub />
              <Link to="https://github.com/Ahliyat"></Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
