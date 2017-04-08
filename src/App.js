import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import './App.css';

const loggedIn = true;

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/old/123'>Old</Link>
    <Link to='/new/456'>New</Link>
    <Link to='/protected'>Protected</Link>
  </nav>
);

const App = (props) => (
  <Router>
    <div>
      <Links />

      <Route exact path='/' render={() => (<h1>Home</h1>)} />

      {/* route props destruction */}
      <Route exact path='/new/:str' render={({match}) => (
        <h1>New: {match.params.str}</h1>
      )} />

      {/* Редирект с /old/123 на /new/456 с передачей old параметра 123 */}
      <Route path='/old/:str' render={({match}) => (
        <Redirect to={`/new/${match.params.str}`} />
      )} />

      {/* Простая защита роута. Происходит редирект, например, при отсутствии залогиненного юзера */}
      <Route path='/protected' render={() => (
        loggedIn
          ? <h1>This is protected page</h1>
          : <Redirect to={'/new/login'} />
      )} />
    </div>
  </Router>
);

export default App;