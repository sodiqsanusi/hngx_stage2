import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieCard.module.css";
import { FaHeart } from "react-icons/fa";
import rottenTomato from "../../assets/rottenTomatoes.svg";
import imdb from "../../assets/imdb.svg";
import genres from "../../util/genre";


const MovieCard = ({movieDetails}) => {

  console.log(movieDetails);
  // let iconStyle = {color: "#ffffff"};
  let genreList = "";
  movieDetails.genre_ids.forEach(id => {
    genreList ? genreList += ", " + genres[id] : genreList = genres[id];
  });

  return ( 
    <Link to="/movie/randomID" className={styles.cardLink}>
      <section className={styles.cardContainer}>
        <div className={styles.posterImg}>
          <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt="" />
          <button className={styles.favouriteBtn}>
            <FaHeart  size={25}/>
          </button>
        </div>
        <article className={styles.posterArticle}>
          <p className={styles.posterDate}>{`${movieDetails.release_date}`}</p>
          <h3 className={styles.posterTitle}>{`${movieDetails.title}`}</h3>
          <div className={styles.rating}>
            <div>
              <div><img src={imdb} alt="IMDB rating" /></div>
              <p>86.0 / 100</p>
            </div>
            <div>
              <div><img src={rottenTomato} alt="Rotten Tomatoes rating" /></div>
              <p>97%</p>
            </div>
          </div>
          <p className={styles.genreList}>{genreList}</p>
        </article>
      </section>
    </Link>
  );
}

MovieCard.propTypes = {
  movieDetails: PropTypes.object,
}
 
export default MovieCard;