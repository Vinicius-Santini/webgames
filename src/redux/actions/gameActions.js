import { API_URL, GET_GAME_LIST } from './actionTypes';
import Service from '../../api/apiService';

export const getGameList = () => async (dispatch) => {
  const url = `${API_URL}/games?key=616528d39c974cfd9c41bcecae99e1c2`;
  return dispatch({
    type: GET_GAME_LIST,
    payload: await Service({
      method: 'get',
      url,
    }),
  });
};
