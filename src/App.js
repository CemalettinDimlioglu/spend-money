
import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [money, setMoney]= useState(100);
  return (
    <div className="App">
      <Header money={money} />
    </div>
  );
}

export default App;
