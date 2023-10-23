import React from 'react';
import style from './SideBar.module.scss'
import bell from '../../assets/bell.svg'
import avatar from '../../assets/avatar1.png'
import search from '../../assets/search.svg'
import home from '../../assets/home.svg'
import watch from '../../assets/watch.svg'
import community from '../../assets/community.svg'
import headphones from '../../assets/headphones.png'
import groupAvatar from '../../assets/groupAvatar.png'

export const SideBar = () => {
    return (
        <div className={style.sideBar}>
            <div className={style.header}>
                <img src={bell} className={style.bell}/>
                <img src={avatar}/>
            </div>
            <div className={style.inputSearch}>
                <img className={style.search} src={search}/>
            </div>
            <div className={style.menuPart}>
                <h4 className={style.title}>MAIN</h4>
                <div className={style.homeMenu}><img src={home}/>
                    <p className={style.home}>Home</p>
                </div>
                <div  className={style.watchMenu}><img src={watch}/>
                    <p className={style.watch}>Watch </p>
                    <div className={style.numberWatch}>2</div>
                </div>
                <div className={style.communityMenu}>
                    <img src={community}/>
                    <p className={style.community}>Community</p>
                    <div className={style.groupAvatar}><img  src={groupAvatar}/></div>

                </div>
                <div className={style.greenLine}></div>
                <div className={style.helpMenu}>
                    <img src={headphones}/>
                    <p className={style.help}>Help</p>
                </div>
            </div>
        </div>
    );
};


