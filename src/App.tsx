import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';

import {Projects} from './projects/Projects';
import {Skills} from './skills/Skills';
import {OnlineWork} from './onlineWork/OnlineWork';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Projects />
            <OnlineWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
