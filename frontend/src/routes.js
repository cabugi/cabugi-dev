import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Ranking from "./pages/Ranking";
import Problemas from "./pages/Problemas";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/problemas" component={Problemas} />
            </Switch>
        </BrowserRouter>
    );
}