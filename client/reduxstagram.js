import React from "react";
import { render } from "react-dom";

import css from "./styles/style.styl";

import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

//Import dependencies from react-router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

//Router of the app
const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
        </Route>
    </Router>
)

// render(<p>Hi</p>, document.getElementById("root"));
// render(<Main />, document.getElementById("root"));
render(router, document.getElementById("root"));
