import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

  let iconStyle = {color: "white"};

  return (
    <form className={styles.searchContainer}>
      <input type="search" placeholder="What do you want to watch?" className={styles.searchInput} />
      <button type="submit" className={styles.searchIconContainer}><FaSearch style={iconStyle}/></button>
    </form>
  );
}

export default SearchBar;