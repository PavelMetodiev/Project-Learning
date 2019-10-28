import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomList from './components/random-list';
import StarWarsPeopleList from './components/star-war-people-list';

class App extends React.Component {
    state = {
        randomList: [
            1, 2, 3, 4
        ],
        page: 1,
        isLoading: false,
    }

    setNextPage = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }));
    }

    render() {
        const { randomList, page, isLoading } = this.state;

        if (isLoading) {
            return <span>Loading...!</span>
        }

        return (
            <React.Fragment>
                <button onClick={this.setNextPage}>Load next page</button>
                <StarWarsPeopleList page={page} />
                {/* <RandomList randomList={randomList} /> */}
            </React.Fragment>
        );
    }

    componentDidMount() {
        //this.setState((prevState) => ({
        //    randomList: [...prevState.randomList, 5]
        //}));

        setTimeout(() => {
            this.setState({
                isLoading: true,
            });
        }, 20000) 
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
