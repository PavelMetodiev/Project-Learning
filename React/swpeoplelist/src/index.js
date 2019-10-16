import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomList from './components/random-list';
import StarWarsPeopleList from './components/star-war-people-list';

class App extends React.Component {
    state = {
        randomList: [
            1, 2, 3, 4
        ]
    }

    render() {
        const { randomList } = this.state;

        return (
            <React.Fragment>
                <StarWarsPeopleList />
                <RandomList randomList={randomList} />
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.setState((prevState) => ({
            randomList: [...prevState.randomList, 5]
        }));
    }
    
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
