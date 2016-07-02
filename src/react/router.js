import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Layout from './layout/Layout'
import LoginForm from './components/LoginForm'
import Clients from './pages/Clients'
import NewClient from './pages/NewClient'
import Artist from './pages/Clients/Artist'
import NotFound from './pages/NotFound'

const Routes = () =>(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>

      <Route path="/login" component={LoginForm}/>

      <Route path="/clients" component={Clients}>
        <IndexRoute component={Artist}/>
      </Route>
      
      <Route path="/new_client" component={NewClient}/>

      <Route path="*" component={NotFound} />

    </Route>

  </Router>
);

export default Routes