import React from 'react';
import style from './SideBar.module.scss'
import bell from '../../assets/bell.svg'
import avatar from '../../assets/avatar1.png'

export const SideBar = () => {
    return (
        <div className={style.sideBar}>
            <img src={bell}/>
            <img src={avatar}/>
            <input type="text" />
            <h4>MAIN</h4>
            <p>Home</p>
            <p>Watch</p>
            <p>Community</p>
            <div className={style.greenLine}></div>
        </div>
    );
};


