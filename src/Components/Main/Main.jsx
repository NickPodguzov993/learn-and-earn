import React from 'react';
import {NavLink} from "react-router-dom";
import {Header} from "./Header/Header";
import {Card} from "./Card/Card";
import style from './Main.module.scss'
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import photo5 from '../../assets/photo5.png'
import photo6 from '../../assets/photo6.png'
import photo7 from '../../assets/photo7.png'
import photo8 from '../../assets/photo8.png'
import vectorRight from '../../assets/VectorRight.svg'

export const Main = () => {
    return (
        <div className={style.main}>
           <Header/>
            <div className={style.cards}>
                <NavLink to={'/Slider'}><Card image={photo1} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo2} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo3} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo4} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo5} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo6} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo7} text={'Fundamentals of investment'}/></NavLink>
                <NavLink to={'/Slider'}><Card image={photo8} text={'Fundamentals of investment'}/></NavLink>
                <img className={style.vector} src={vectorRight}/>
            </div>
        </div>
    );
};

