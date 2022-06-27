import React from 'react';
import style from './Project.module.css'
import btnStyle from '../../common/styles/Button.module.css'

type ProjectPropsType = {
    nameProject: string
    projectDescription: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href={'#!'} className={btnStyle.btn}>Watch</a>
            </div>
            <h3>{props.nameProject}</h3>
            <span>{props.projectDescription}</span>
        </div>
    );
};
