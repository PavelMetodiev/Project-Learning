import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from  './components/counter';

let initialCount = 10;

function render() {
    ReactDOM.render(
        <Counter initialCount={initialCount}/>, 
        document.getElementById('root')
    );
};

setTimeout(() => {
    initialCount = 20;
    render()
}, 2000);

render();