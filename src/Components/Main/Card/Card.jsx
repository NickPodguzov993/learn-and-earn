import React from 'react';
import style from './Card.module.scss'
import coin from '../../../assets/coin.svg'
import learn from '../../../assets/learn.svg'

export const Card = (props) => {
    return (
        <div className={style.card}>
            <img className={style.photo} src={props.image} />
            <span className={style.text}>{props.text}</span>
            <img  src={learn} className={style.learn}/>
            <div className={style.earn}>
                <img  src={coin}/>
                <p className={style.description}> Earn 2T</p>
            </div>

        </div>
    );
};

