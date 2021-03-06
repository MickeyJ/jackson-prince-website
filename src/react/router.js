import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Layout from './layout/Layout'
import LoginForm from './components/LoginForm'
import Admin from './containers/Admin'
import Client from './containers/Client'
import Clients from './pages/Clients'
import NewClient from './pages/NewClient'
import Artist from './components/Artist'
import NotFound from './pages/NotFound'

const Routes = () =>(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      
      <Route path="/login" component={LoginForm}/>
      
      <Route path="/admin" component={Admin}>
        <Route path="/admin/clients" component={Clients}>
          <IndexRoute component={Artist}/>
        </Route>

        <Route path="/new_client" component={NewClient}/>
      </Route>

      <Route path="/client" component={Client}/>


      
      <Route path="*" component={NotFound} />
      
    </Route>
  </Router>
);

export default Routes