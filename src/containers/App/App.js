import React from 'react';
import './App.css';
import StarRating from "../../components/StarRating";
import Grid from "../../components/Grid";
import {feedsource} from '../../data/data';

function App() {
  return (
    <div className="App">
      <Grid content={feedsource}/>
    </div>
  );
}

export default App;
