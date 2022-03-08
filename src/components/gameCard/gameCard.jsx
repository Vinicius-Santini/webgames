import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/gameCard/gameCard.module.sass'
import Capsule from "../caspsule/capsule";

const GameCard = ({ id, name, background_image, rating, genres}) => {
  return (
    <div className={styles.card}>
      <Image className={styles.cardImage} alt={`Imagem do jogo: ${name}`}
      src={background_image}
      width={400}
      height={300}></Image>
      <div className={styles.cardInfo}>
        <h3>{name}</h3>
        <div className={styles.ratingSection}>
          <FontAwesomeIcon className={styles.ratingIcon} icon={faStar}></FontAwesomeIcon>
          <div>{rating} / 5.0</div>
        </div>
        <div className={styles.genresSection}>
          {genres.map((genre) => <Capsule data={genre}></Capsule>)}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
