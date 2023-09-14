import Footer from "../components/Footer";
import Logo from "../components/Logo";
import MovieCard from "../components/MovieCard";
import PosterDetails from "../components/PosterDetails";
import SearchBar from "../components/SearchBar";
import SignInHamburger from "../components/SignInHamburger";
import styles from "../styles/HomePage.module.css";
import JsonData from "../util/placeholder";

const HomePage = () => {

  const randomNo = Math.floor(Math.random() * 10);
  let poster_movie = JsonData.results[randomNo];
  let poster_movie_bg = "https://image.tmdb.org/t/p/original" + JsonData.results[randomNo].backdrop_path;
  // console.log(JsonData.results.slice(0, 10));

  return ( 
    <>
      <section className={styles.moviePosterHead} style={{backgroundImage: `url(${poster_movie_bg})`}}>
        <div className={styles.darkCover}></div>
        <header className={styles.header}>
          <Logo />
          <SearchBar />
          <SignInHamburger />
        </header>
        <PosterDetails poster_movie={poster_movie}/>
      </section>
      <main className={styles.testingCard}>
        <MovieCard movieDetails={poster_movie}/>
      </main>
      <Footer />
    </>
  );
}
 
export default HomePage;