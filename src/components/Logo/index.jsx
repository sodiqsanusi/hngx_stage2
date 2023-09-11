import LogoIcon from "../../assets/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return ( 
    <div className={styles.logoDiv}>
      <a href="/"><img src={LogoIcon} alt="Click to access the MovieBox Homepage" /></a>
    </div>
  );
}
 
export default Logo;