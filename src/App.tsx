import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import UseStateCompone from './components/Todo/TodoComponent'

function App() {

  return (
    <div className="App">
      <h1>Practica de React y librerias</h1>
      <hr/>
      <Router>
        <Switch>
          <Route to="/" component={UseStateCompone} />
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
