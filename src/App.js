
// CSS
import './App.css';
import './components/activities/activities.scss';
import './components/footer/footer.scss';

// JS
import Activities from './components/activities/activities.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <div class="main">
        <Activities/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
