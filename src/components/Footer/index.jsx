import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";


const Footer = () => {

  let iconStyle = {color: "#111827"};

  return ( 
    <footer className={styles.footerContainer}>
      <ul className={styles.iconLinkContainer}>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer"><FaFacebookSquare style={iconStyle} size={24}/></a></li>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer"><FaInstagram style={iconStyle} size={24}/></a></li>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer"><FaTwitter style={iconStyle} size={24}/></a></li>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer"><FaYoutube style={iconStyle} size={24}/></a></li>
      </ul>
      <ul className={styles.linkContainer}>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer">Conditions of Use</a></li>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer">Privacy &amp; Policy</a></li>
        <li><a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer">Press Room</a></li>
      </ul>
      <p className={styles.footerCopyright}>&copy; 2023 MovieBox by Sodiq &quot;Ade&quot; Sanusi</p>
    </footer>
  );
}
 
export default Footer;