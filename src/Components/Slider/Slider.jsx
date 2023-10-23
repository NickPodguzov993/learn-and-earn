import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Slider.module.scss'
import vector from '../../assets/VectorLeft.svg'
import MaskGroup1 from '../../assets/MaskGroup1.png'
import MaskGroup2 from '../../assets/MaskGroup2.png'
import MaskGroup3 from '../../assets/MaskGroup3.png'
import sliderButton from '../../assets/button.svg'


 export const Slider = () => {
    return (
        <div className={style.page}>
            <div className={style.header}>
                <NavLink className={style.navLink} to={'/Main'}>
                    <img className={style.vector} src={vector}/>
                    <h2 className={style.title}>Academy</h2>
                </NavLink>
                <button className={style.btn}>Skip</button>
            </div>

            <div className={style.slider}>
                <div>
                    <img className={style.image1} src={MaskGroup1}/>
                    <h2 className={style.description1}>Introduction</h2>
                </div>
               <div>
                   <img className={style.image2} src={MaskGroup2}/>
                   <h2 className={style.description2}>Introduction</h2>
               </div>
                <div>
                    <img className={style.image3} src={MaskGroup3}/>
                    <h2 className={style.description3}>Introduction</h2>
                </div>
                <div className={style.sliderButton}>
                    <img src= {sliderButton}/>
                </div>
            </div>
        </div>
    );
};


