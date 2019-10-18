import React from 'react';

class StarWarsPeopleList extends React.Component {
    state = {
        people: [],
        isLoading: true,
        error: false,
    }; 

    shouldComponentUpdate(nextProps, nextState ) {
        const haveNextPropsChanged = (
            JSON.stringify(nextProps) !== JSON.stringify(this.props) && 
            Object.keys(nextProps).length !== Object.keys(this.props).length
        );
        
        const hasNextStateChanged = JSON.stringify(nextState) !== JSON.stringify(this.props);
        return (haveNextPropsChanged || hasNextStateChanged);
    }
    

    render() {
        const { people, isLoading, error } = this.state;
        
        if (error) {
            return <span> Smt went wrong, pls reload</span>;
        }

        if (isLoading) {
            return <span>Loading....</span>
        }

        return (
            <ul>
                {
                    people.map(person => (
                        <li>
                            Name: {person.name}
                            Gender: {person.gender}
                        </li>
                    ))
                }
            </ul>
        )
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => data.results)
        .then(people => this.setState({ people, isLoading: false }))
        .catch(error => {
            console.error(error);
            this.setState({
                error:true
            });
        });
    }
    
}

export default StarWarsPeopleList;