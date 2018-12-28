import React from 'react';
import { render } from 'react-dom';

/* Begin Sentry Error tracking software for JS */
import * as Sentry from '@sentry/browser';
import ErrorBoundary from './components/ErrorBoundary';
//Tag the release
const RELEASE = 'reduxstagram@0.1.0';
const sentry_url = "https://fc87c1eb860343baa5614490cf23693f@sentry.io/1361559";
Sentry.init({
    dsn: sentry_url,
    release: RELEASE
});
/* End Sentry Error tracking software for JS */

//Import CSS
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
    <ErrorBoundary>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={PhotoGrid}></IndexRoute>
                    <Route path="/view/:postId" component={Single}></Route>
                </Route>
            </Router>
        </Provider>
    </ErrorBoundary>
)

render(router, document.getElementById('root'));