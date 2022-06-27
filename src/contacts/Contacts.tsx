import React from 'react';
import style from './Contacts.module.css'
import cs from '../common/styles/Container.module.css'
import btnStyle from '../common/styles/Button.module.css'


export const Contacts = () => {
    return (

            <div className={style.contactsBlock}>
                <div className={`${cs.container} ${style.contactsContainer}`}>
                    <h2 style={{backgroundColor: 'white'}}>Contacts</h2>
                    <form className={style.contacts}>
                        <input className={style.mb} type={'text'}/>
                        <input className={style.mb} type={'text'}/>
                        <textarea className={style.mb} id="w3review" name="w3review" rows={4}/>
                        <input className={`${btnStyle.btn} ${style.formBtn}`} type={'submit'} value={'Send'}/>
                    </form>
                </div>
            </div>


    );
};