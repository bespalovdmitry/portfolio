import React from 'react';
import style from './Projects.module.css'
import cs from '../common/styles/Container.module.css'
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${cs.container} ${style.projectsContainer}`}>
                <h2 style={{backgroundColor: 'white'}}>My Projects</h2>
                <div className={style.projects}>
                    <Project nameProject={'Social network'}
                             projectDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laudantium molestiae numquam reiciendis similique veniam!'}
                    />
                    <Project nameProject={'Todo List'}
                             projectDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, laboriosam quos. Autem exercitationem magni minus, pariatur recusandae vero.'}
                    />
                </div>
            </div>
        </div>
    );
};
