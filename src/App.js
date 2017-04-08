import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers'; // То место, где вы храните редукторы

// Создание выбранной вами истории для браузера
const history = createHistory();

// Создаем middleware для перехвата и отправки действий навигации
const middleware = routerMiddleware(history);

// Добавляем редукторы в хранилище по ключу router
// Применяем наше middleware для навигации
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

// Теперь мы можем отправлять действия навигации из любого места!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter будет использовать store из Provider автоматически */}
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);