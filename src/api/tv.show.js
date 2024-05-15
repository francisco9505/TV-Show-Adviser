import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATION_LIST } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../config";

// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'

// 162375357f0eaf1dd8caba47a001b2e9

export class TVShowApi {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);

    return response.data.results;

    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );

    return response.data.results;
    // return FAKE_RECOMMENDATION_LIST
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );

    return response.data.results;
    // return FAKE_RECOMMENDATION_LIST
  }
}
