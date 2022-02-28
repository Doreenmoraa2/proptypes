
import './App.css';
import moviesList from './Components/moviesList';
import Movies from './Components/Movies';

function App() {
  return (
    <div className="App">
      <Movies movies ={moviesList}/>
    </div>
  );
}

export default App;
