import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {

    const {id, name, image} = props;

    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{image}</div>
        </div>
    );
}

export default Card;