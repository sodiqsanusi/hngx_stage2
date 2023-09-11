import styles from "./SignInHamburger.module.css";
import hamburgerIcon from "../../assets/Menu.svg";

const SignInHamburger = () => {
  return ( 
    <div className={styles.container}>
      <a href="#">Sign in</a>
      <button className={styles.hamburgerButton}><img src={hamburgerIcon} alt="Click to open the navigation pane" /></button>
    </div>
  );
}
 
export default SignInHamburger;