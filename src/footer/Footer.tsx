import React from 'react';
import style from './Footer.module.css'
import cs from '../common/styles/Container.module.css'


export const Footer = () => {
    return (

        <div className={style.footerBlock}>
            <div className={`${cs.container} ${style.footerContainer}`}>
                <h2 style={{backgroundColor: 'white'}}>Bespalov Dmitry</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span className={style.rights}>All rights under the provision of the copyright Act are reserved.</span>
            </div>
        </div>


    );
};
