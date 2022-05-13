import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/index';
import Card from './components/card/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <Card/>
    </div>
  );
}

export default App;
