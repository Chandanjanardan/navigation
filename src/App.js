import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import{BrowserRouter,Switch,Route, Router} from 'react-router-dom';
import './App.css'
export const App=()=>{

  return(
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/navbar'/>
      </Switch>
    </BrowserRouter>
    </>
  )
}
