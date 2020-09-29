import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ProjectsPage from './Pages/Projects';
const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path= '/' component ={AboutPage}/>
      <Route exact path= '/contact' component ={ContactPage}/>
      <Route exact path= '/projects' component ={ProjectsPage}/>
    </Switch>
  </BrowserRouter>
) 

export default Routes;