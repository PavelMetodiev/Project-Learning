import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomList from './components/random-list';
import StarWarsPeopleList from './components/star-war-people-list';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <StarWarsPeopleList />
                <RandomList />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
