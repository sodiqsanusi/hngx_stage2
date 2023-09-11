import Logo from "../components/Logo";
import PosterDetails from "../components/PosterDetails";
import SearchBar from "../components/SearchBar";
import SignInHamburger from "../components/SignInHamburger";
import styles from "../styles/HomePage.module.css";
// import JsonData from "../util/placeholder";

const HomePage = () => {

  // console.log(JsonData.results.slice(0, 10));

  return ( 
    <>
      <section className={styles.moviePosterHead}>
        <header className={styles.header}>
          <Logo />
          <SearchBar />
          <SignInHamburger />
        </header>
        <PosterDetails />
      </section>
      <main>
        Main Movie Grid here
      </main>
    </>
  );
}
 
export default HomePage;