import React from 'react';
import style from  './Header.module.scss'
import vector from '../../../assets/VectorLeft.svg'
import vectorRight from '../../../assets/VectorRight.svg'

export const Header = () => {
    return (
        <div>
            <div className={style.navBar}>
                <img className={style.vector} src={vector}/>
                <h2 className={style.title}>Academy</h2>
                <nav className={style.list}>
                    <ul className={style.list}>
                        <li className={style.all}>All</li>
                        <li>Stocks</li>
                        <li>ETFs</li>
                        <li>Crypto</li>
                        <li>NFTs</li>
                    </ul>
                </nav>
            </div>
            <div className={style.menu}>
                <p>New Playlist</p>
                <p className={style.seeAll}>See All
                    <img className={style.vectorRight} src={vectorRight}/></p>

            </div>
        </div>
    );
};

