import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home'
import BooksList from './components/BooksList'
import CreateBook from './components/CreateBook'


const App= ()=> {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/books" component={BooksList}/>
          <Route exact path="/create" component={CreateBook} />
          //TODO add 404
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
