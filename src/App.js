
import './App.css';
import React from 'react'
import Score from './components/Score'
import Play from './components/Play'
import Category from './components/Category'
import Points from './components/Points'
import Answer from './components/Answer'
import Reveal from './components/Reveal'
import Trivial from './components/Trivia';

function App() {
  const apiKey = 'http://jservice.io/api/clues'


  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Score />
      <Play />
      <Category />
      <Points />
      <Answer />
      <Trivial />
      <Reveal />
    </div>
  );
}

export default App;
