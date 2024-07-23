import { useState } from 'react';
import './App.css';
import WorldviewPage from './Pages/WorldviewPage';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <WorldviewPage />
    </div>
  );
}
export default App;
