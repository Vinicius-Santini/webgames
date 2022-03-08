import { GET_GAME_LIST } from '../actions/actionTypes';

const initialState = {
  games: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GAME_LIST:
      const enhancedActPayload = action.payload.results.map((game) => {
        return { ...game, visible: true };
      });
      return {
        ...state,
        games: enhancedActPayload,
      };
    default:
      return state;
  }
}
