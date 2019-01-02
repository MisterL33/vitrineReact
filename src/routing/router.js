import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/main.css';
import '../styles/contact.css';
import initiale from '../images/initiale2.png'
import Home from '../screens/HomeScreen';

import logo from '../images/logo.svg';
const About = () => <h2>About</h2>;


const AppRouter = () => (
    <Router>
        <>
            <header id="header">
                <div className="inner">
                    <Link to='/' className="logo App-logo-directional"><img alt='initiale' height={80} src={initiale} /></Link>
                    <nav id="nav">
                        <a href="#banner">Accueil</a>
                        <a href="#one">A propos</a>
                    </nav>
                    <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
                </div>
            </header>
            <section id="banner">
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Site entièrement responsive codé en reactJS <img src={logo} className="App-logo" alt="logo" /></p>
            </section>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
        </>
    </Router>
);

export default AppRouter;