import * as React from 'react';
import * as ReactROM from 'react-dom'
import {Header} from "../shared/Header";

window.addEventListener('load', () => {
    ReactROM.hydrate(<Header/>, document.getElementById('react_root')); //render
})