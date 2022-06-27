import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    skill: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
            <div className={style.skill}>
                <div className={style.icon}></div>
                <h3>{props.skill}</h3>
                <span>{props.description}</span>
            </div>
    );
};