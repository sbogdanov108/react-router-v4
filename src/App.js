import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route path='/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)' render={({match}) => (
        <h1>
          param A: {match.params.a} <br/> param B: {match.params.b}
        </h1>
      )}/>
    </div>
  </Router>
);

export default App;