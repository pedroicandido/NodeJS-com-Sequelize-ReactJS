import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Registro/Registro';
import Dashboard from './components/Dashboard';

const routes = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/user/:userId/itens" component={Dashboard}/>
        <Route path="/register" component={Register}/>
    </Switch>
);

export default routes;