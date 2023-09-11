import { FaPlayCircle } from "react-icons/fa";
import rottenTomatoes from "../../assets/rottenTomatoes.svg";
import imdb from "../../assets/imdb.svg";
import styles from "./PostDetails.module.css";
import PropTypes from "prop-types";

const PosterDetails = ({poster_movie}) => {

  return ( 
    <article className={styles.articleContainer}>
      <h1>{poster_movie.title}</h1>
      <div className={styles.rating}>
        <div>
          <div><img src={imdb} alt="IMDB rating" /></div>
          <p>86.0 / 100</p>
        </div>
        <div>
          <div><img src={rottenTomatoes} alt="Rotten Tomatoes rating" /></div>
          <p>97%</p>
        </div>
      </div>
      <p>{poster_movie.overview}</p>
      <button className={styles.trailerButton}>
        <FaPlayCircle />
        Watch Trailer
      </button>
    </article>
  );
}

PosterDetails.propTypes = {
  poster_movie: PropTypes.object,
}
 
export default PosterDetails;