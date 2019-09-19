import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/app.css';
import contacts from './data/contacts.json';

const htmlArray = []

contacts.forEach((contact, index) => {
    htmlArray.push(<div key={index} className="contact" data-id="id">
        <span className="avatar small">&#9787;</span>
        <span className="title">{contact.firstName} {contact.lastName}</span>
    </div>)
})

const Main = () => (
    <div className="container">
        <header>&#9993; Contact Book</header >
        <div id="book">
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    <Contacts />
                </div>
            </div>
        </div>
    </div>
)
const Contacts = (props) => (
    htmlArray
)


ReactDOM.render(
    <Main />,
    document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'));

                    // If you want your app to work offline and load faster, you can change
                    // unregister() to register() below. Note this comes with some pitfalls.
                    // Learn more about service workers: https://bit.ly/CRA-PWA

