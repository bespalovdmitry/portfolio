import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <a href='#'>Home</a>
            <a href='#'>Skills</a>
            <a href='#'>Projects</a>
            <a href='#'>Contacts</a>
        </nav>
    );
};