import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";

import Rotas from './routes'

function App() {
  return (
    <Router>
      <Rotas/>
    </Router>
  );
}

export default App;
