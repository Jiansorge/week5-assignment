import React from 'react';
import './App.css';
import PokemonCard from './PokemonCard.js'
import PokemonPage from './PokemonPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>Pokémon API - Homework 5</h1>
      <p>Go to '<Link to="/pokemon" className="link">https://jiansorge.github.io/week5-assignment/pokemon</Link>' to view all 807 Pokémon.</p>
      <p>Type the name of a Pokémon after '<u>https://jiansorge.github.io/week5-assignment/pokemon</u>'' to view it's info!</p>
      <p>i.e. '<Link to="/pokemon/mew" className="link">https://jiansorge.github.io/week5-assignment/pokemon/mew</Link>'</p>
    </div>
  );
}

function NotFound() {
  return <h1>404 Error</h1>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

 render (){

    return(
      <div className="App" >
        <Router >
          <div className="App-header">
            <Link to="/" className="App-header-link">Home</Link>
            <Link to="/pokemon" className="App-header-link" >Pokémon</Link>
          </div>
 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/" component={PokemonPage} />
            <Route path="/pokemon/:id" component={PokemonCard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
// TODO Pokemon grid page removed. could not get map or sub-component 'Pokemon' to work
//  <Link to="/pokemon/bulbasaur">Bulbasaur</Link>

export default App;
