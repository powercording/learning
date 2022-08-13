const API_KEY = "ad7174cb34a6c9fe500832025e1ef8cb";
const BASE_URL = "https://api.themoviedb.org/3";
const API_IMAGE_ADDRESS = "https://image.tmdb.org/t/p/original/";

export type InterfaceResults = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface InterfaceGetMovieInfo {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: InterfaceResults[];
}

export function getMovieInfo() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getImage(id:string){
  return `${API_IMAGE_ADDRESS}${id}`
}
