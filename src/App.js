import logo from './logo.svg';

// CSS
import './App.css';
import './components/activities/activities.scss';

// JS
import Activities from './components/activities/activities.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Activities/>
      </header>
    </div>
  );
}

export default App;
