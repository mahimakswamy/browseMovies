import CardContainer from './components/CardContainer/CardContainer';
import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Filter from './components/Filter/Filter';
import MovieDetails from './components/MovieDetails'

const App = () =>  {


    return(
      <Router>
        <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path='/movieDetails' component={MovieDetails}></Route> 
        </Switch>
        </div>

      </Router>

    )
}

const Home = (props) =>(
  <div>
    <Filter />
      <CardContainer {...props} />
  </div>
)



export default App;
