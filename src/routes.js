import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Person from './Person'
import Ships from './Ships'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Person} />
                <Route exact path="/ships" component={Ships} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;