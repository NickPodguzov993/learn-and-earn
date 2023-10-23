import React from 'react';
import style from './SideBar.module.scss'

export const SideBar = () => {
    return (
        <div className={style.sideBar}>
        <div className={style.bell}></div>
            <div className={style.avatar}></div>
            <input type="text" />
            <h4>MAIN</h4>
            <p>Home</p>
            <p>Watch</p>
            <p>Community</p>
            <div className={style.greenLine}></div>
        </div>
    );
};


