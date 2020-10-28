import {movies, reviews} from '../mocks/movies';
import {ALL_GENRES, ActionType, MOVIE_COUNT_STEP} from '../const';


const initialState = {
  currentGenre: ALL_GENRES,
  promoMovie: movies[0],
  visibleMoviesCount: MOVIE_COUNT_STEP,
  movies,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign(
          {},
          state,
          {
            currentGenre: action.genre,
            visibleMoviesCount: MOVIE_COUNT_STEP,
          });

    case ActionType.SHOW_MORE_MOVIES:
      return Object.assign(
          {},
          state,
          {
            visibleMoviesCount: action.visibleMoviesCount,
          });
  }

  return state;
};


export default reducer;
