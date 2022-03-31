import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';
import  './App.css';
import {MdFitnessCenter} from 'react-icons/md'
import Navigation from './components/nav.js'

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <main>
        <Router>
          <header className="header">
            <h1>Fitness View <MdFitnessCenter/></h1>
            <p>Your Lightweight Fitness Tracker.</p>
          </header>
          <Navigation/>
          <div className="App-header">

            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit}  />
            </Route>
            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit} />
            </Route>
            </div>
        </Router>
      </main>
      <footer className='footer'>
          <p>A Full Stack MERN App Project</p>
          <p>&copy; 2022 Gabriel Mortensen. </p>
        </footer>
    </div>
  );
}

export default App;

