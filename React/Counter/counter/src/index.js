import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from  './components/counter';

let initialCount = 10;

function getCounter() {
    return <Counter initialCount={initialCount}/>;
}



ReactDOM.render(
    getCounter(), 
    document.getElementById('root')
);

