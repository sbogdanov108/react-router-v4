import React from 'react';
import {BrowserRouter, HashRouter, MemoryRouter, StaticRouter, Route, Link} from 'react-router-dom';

import './App.css';

const LinksRoutes = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>

    <Route exact path='/' render={() => <h1>Home</h1>} />
    <Route path='/about' render={() => <h1>About</h1>} />
  </div>
);

// Принудительное обновление страницы
const forceRefresh = () => {
  console.log(new Date());
  return false;
};

const BrowserRouterApp = () => (
  // HTML5 History
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
);

const HashRouterApp = () => (
  // Hash History
  <HashRouter hashType='slash'>
    <LinksRoutes />
  </HashRouter>
);

const MemoryRouterApp = () => (
  // Memory History - for testing purpose
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
  >
    <LinksRoutes />
  </MemoryRouter>
);

const StaticRouterApp = () => (
  // Static - for server-side rendering
  <StaticRouter location='/about' context={{}}>
    <LinksRoutes />
  </StaticRouter>
);

//export default StaticRouterApp;
//export default MemoryRouterApp;
export default HashRouterApp;
//export default BrowserRouterApp;