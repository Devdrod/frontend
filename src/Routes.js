import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'

import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'

import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'

const Routes =() =>{
    return(
        <BrowserRouter>
   
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/signin' exact component={Signin}></Route>
                <Route path='/signup' exact component={Signup}></Route>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                <AdminRoute path="/admin/dashboard" component={AdminDashboard}></AdminRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes