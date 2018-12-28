import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//default data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
}

//Enable support for Redux dev tools
//If devtools is not open just return the store "f"
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//Enable hot reloading for reducers: Accept the hot reload and re-require the root reducer
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;