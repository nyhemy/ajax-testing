import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {

    const {id, name, image} = props;

    return (
        <div className={styles.card}>
            <img src={image} alt="card image" width="150" height="75" />
            <div>{name}</div>
            <div>{id}</div>
        </div>
    );
}

export default Card;