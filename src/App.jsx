  import { useEffect, useState } from "react";
  import { TVShowApi } from "./api/tv.show";
  import s from "./style.module.css";
  import { BACKDROP_BASE_URL } from "./config";
  import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
  import logo from "./assets/img/logo.png";
  import { Logo } from "./components/Logo/Logo";
  import { TvShow } from "./components/tvShow/TvShow";
  import { SearchBar } from "./components/SearchBar/SearchBar";

  export function App() {
    const [hasSearched, setHasSearched] = useState(false); // Track search status
    const [currentTVShow, setCurrentTVShow] = useState(null);
    const [recommendationList, setRecommendationList] = useState([]);

    const fetchPopular = async () => {
      const popularTVShowList = await TVShowApi.fetchPopular();
      if (popularTVShowList.length > 0) {
        setRecommendationList(popularTVShowList.slice(0, 10)); // Show popular shows as recommendations
      }
    };

    const fetchRecommendations = async (tvShowId) => {
      const recommendationListResp = await TVShowApi.fetchRecommendations(tvShowId);
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    };

    const fetchByTitle = async (title) => {
      const searchResponse = await TVShowApi.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
        setHasSearched(true); // Update search status
        fetchRecommendations(searchResponse[0].id);
      }
    };

    useEffect(() => {
      fetchPopular();
    }, []);

    const updateCurrentTvShow = (tvShow) => {
      setCurrentTVShow(tvShow);
      setHasSearched(true); // Update search status when a recommendation is clicked
    };

    return (
      <div
        className={s.main_container}
        style={{
          background: currentTVShow
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "black", // Default background
        }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo
                img={logo}
                tittle={"Watowatch"}
                subtittle={"Find a show you may like"}
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <SearchBar onSubmit={fetchByTitle} />
            </div>
          </div>
        </div>
        <div>
          
          {hasSearched && currentTVShow && (
            <div className={s.tv_show_detail}>
              <TVShowDetails tvShow={currentTVShow} />
            </div>
          )}
          <div className={s.recommended_tv_shows}>
            <TvShow
              onClickItem={updateCurrentTvShow}
              tvShowList={recommendationList}
            />
          </div>
        </div>
      </div>
    );
  }
