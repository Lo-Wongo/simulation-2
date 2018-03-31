import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import Wizard from '../components/Wizard/Wizard';

import View1 from '../components/Wizard/View1/View1';
import View2 from '../components/Wizard/View2/View2';
import View3 from '../components/Wizard/View3/View3';
import View4 from '../components/Wizard/View4/View4';
import View5 from '../components/Wizard/View5/View5';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Login } path="/login" />
    <Route component={ Register } path="/register" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ View1 } path="/wizard/view1" />
    <Route component={ View2 } path="/wizard/view2" />
    <Route component={ View3 } path="/wizard/view3" />
    <Route component={ View4 } path="/wizard/view4" />
    <Route component={ View5 } path="/wizard/view5" />
    <Route component={ Wizard } path="/wizard" />

    
  </Switch>
)

