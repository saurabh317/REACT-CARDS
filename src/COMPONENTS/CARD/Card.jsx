import React from 'react';
import styles from "./Card.module.css";

const Card = ({flag,capital}) => {
  return (
    <div>
      <img src={flag} alt="" />
      <h2>{capital}</h2>
    </div>
  )
}

export default Card