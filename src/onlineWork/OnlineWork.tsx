import React from 'react';
import style from './OnlineWork.module.css'
import cs from '../common/styles/Container.module.css'
import btnStyle from '../common/styles/Button.module.css'

export const OnlineWork = () => {
    return (
        <div className={style.onlineBlock}>
            <div className={`${cs.container} ${style.onlineContainer}`}>
                <h2 className={style.title}>Considering online work options</h2>
                <button className={btnStyle.btn}>Hire me</button>
            </div>
        </div>
    );
};
