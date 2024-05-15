import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export const TvShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > 20
          ? tvShow.name.slice(0, 20) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};
