import React from 'react';
import Header from '../header';
import Counter from '../counter';

import './app.css'

const App = () => {
    return(
    <div className="app">
        <Header />
        <Counter />
    </div>
  );
}

export default App;