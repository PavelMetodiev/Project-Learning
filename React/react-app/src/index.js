import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function renderApp() {
    ReactDOM.render(
        <Header />,
        document.getElementById('root')
    )
}

let LogoText = 'Logo Placeholder'

const handleNewLinkClick = (event) => {
    event.preventDefault()
    const content = event.target.innerHTML
    LogoText = content
    renderApp()    
}

const Logo = () => {
    return (
        <div> 
            <h1>{LogoText}</h1>
        </div>
    )
}

const Navigation = () => {
    const className = 'site-nav'
    const linkClassName = `${className}-link`

    return (
        <React.Fragment>
            <div id="some-id" className="we add Name">
                Hi everyone!
            <span>Some content here</span>
                <a href="#"> Some Link</a>
            </div>
            <nav className={className}>
                <ul>
                    <li><a className={linkClassName} href="/" onClick={handleNewLinkClick}>Contact us</a></li>
                    <li><a className={linkClassName} href="/" onClick={handleNewLinkClick}>Home</a></li>
                    <li><a className={linkClassName} href="/" onClick={handleNewLinkClick}>About</a></li>
                </ul>
            </nav>
        </React.Fragment>
           
    )
}

const Header = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    )
}

renderApp()

