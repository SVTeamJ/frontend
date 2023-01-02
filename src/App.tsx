import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-blue-600">안녕하세요</h1>
    </div>
  );
}

export default App;
