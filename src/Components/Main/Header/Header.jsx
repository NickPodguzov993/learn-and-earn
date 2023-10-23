import React from 'react';
import style from  './Header.module.scss'

export const Header = () => {
    return (
        <div>
            <div className={style.navBar}>
                <h2>Academy</h2>
                <nav className={style.list}>
                    <ul className={style.list}>
                        <li>All</li>
                        <li>Stocks</li>
                        <li>ETFs</li>
                        <li>Crypto</li>
                        <li>NFTs</li>
                    </ul>
                </nav>
            </div>
            <div className={style.menu}>
                <p>New Playlist</p>
                <p>See All</p>
            </div>
        </div>
    );
};

