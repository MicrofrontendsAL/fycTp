import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const BuyButton = lazy(() => import('./components/buyButton'));
const NotFound = lazy(() => import('./page/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <Route path="/buy/:productId" component={BuyButton} exact />
                <Route component={NotFound} />
            </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
