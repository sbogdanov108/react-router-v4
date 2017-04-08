import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to='/?id=123'>Inline</Link>
    <Link to={{pathname: '/', search: 'id=456'}}>Object</Link>
  </nav>
);

const App = (props) => (
  <Router>
    <div>
      <Links />

      {/* route props destruction */}
      <Route path='/' render={({match, location}) => (
        <div>
          <p>root</p>
          <b>match:</b> <pre>{JSON.stringify(match, null, 2)}</pre>
          <b>location:</b> <pre>{JSON.stringify(location, null, 2)}</pre>
          <b>location.search:</b> <p>{new URLSearchParams(location.search).get('id')}</p>
        </div>
      )}/>
    </div>
  </Router>
);

export default App;