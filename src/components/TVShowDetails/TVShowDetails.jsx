import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export const TVShowDetails = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={s.tittle}>{tvShow.name}</div>
      <div className={s.average_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>{" "}
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
};
