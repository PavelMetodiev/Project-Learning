import React from 'react';

class StarWarsPeopleList extends React.Component {
    state = {
        people: []
    } 

    render() {
        const { people } = this.state;
        
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
}

export default StarWarsPeopleList;