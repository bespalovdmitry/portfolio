import React from 'react';
import style from './Skills.module.css'
import cs from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';


export const Skills = () => {
    return (

            <div className={style.skillsBlock}>
                <div className={`${cs.container} ${style.skillsContainer}`}>
                    <h2 style={{backgroundColor: 'white'}}>My Skills</h2>
                    <div className={style.skills}>
                        <Skill skill={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sequi.'}/>
                        <Skill skill={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sequi.'}/>
                        <Skill skill={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sequi.'}/>
                    </div>
                </div>
            </div>


    );
};