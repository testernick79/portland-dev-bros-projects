import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '704e608d';

  const APP_KEY = '5806707b5f6fd60b20118db0a6ff43e8';

  const sampleReq =
    "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";


  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};


export default App;
