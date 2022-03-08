import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameList } from "../../redux/actions/gameActions";
import GameCard from "../gameCard/gameCard";
import styles from "../../styles/gameList/gameList.module.sass"
import Loader from "../loader/loader";

const GameList = () => {
    const dispatch = useDispatch();
    const {games} = useSelector((state) => state.game);
    return (
      <>
        <div onClick={async () => await dispatch(getGameList())}>click</div>
          <div className={styles.list}>
            {games.length > 0 ? games.map((game) => <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            background_image={game.background_image}
            rating={game.rating}
            genres={game.genres}></GameCard>) :
            <Loader></Loader>}
          </div>
      </>
    );
};

export default GameList;
