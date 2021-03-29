import React from 'react';
import ReactGame from './ReactGame.js';
import Title from './Title';

const App = () => (
  <div className="App" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
     <Title />
    <ReactGame width={40} height={40} tilesize={16}/>
  </div>
);

export default App;
