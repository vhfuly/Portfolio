import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path= '/' component ={AboutPage}/>
      <Route exact path= '/contact' component ={ContactPage}/>
    </Switch>
  </BrowserRouter>
) 

export default Routes;