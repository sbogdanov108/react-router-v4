import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import './App.css';

const Home = () => <h1>Home</h1>;

const isActiveFunc = (match, location) => {
  return match;
};

const Links = () => (
  // Разные способы задания активного стиля
  <nav>
    <NavLink exact activeClassName='active' to="/">Home</NavLink>

    <NavLink activeStyle={{color: 'green'}} to='/about'>About</NavLink>

    {/* Другой вариант задания ссылки */}
    {/* <Link to={{pathname: '/about'}}>About</Link> */}

    <NavLink isActive={isActiveFunc} activeClassName='active' to="/contact">Contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links/>

      <Route exact path='/' component={Home}/>
      <Route path='/about' render={() => <h1>About</h1>}/>
      <Route path='/contact' render={() => <h1>Contact</h1>}/>
    </div>
  </Router>
);

export default App;