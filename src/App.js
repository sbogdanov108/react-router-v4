import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </nav>
);

// props destruction
const Header = ({match}) => (
  <div className="header">
    {/* route props destruction */}
    <Route path='/:page' render={({match}) => (
      <h1>{match.params.page} header</h1>
    )}/>
  </div>
);

const Content = ({match}) => (
  <div className="content">
    <Route path='/:page' render={({match}) => (
      <p>{match.params.page} content</p>
    )}/>
  </div>
);

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Header/>
      <Content/>
    </div>
  </Router>
);

export default App;