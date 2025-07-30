import './css/App.css';
import MovieCard from "./components/MovieCard"
import Favorites from './pages/favorites';
import Home from "./pages/home";
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {

  // A component can only have 1 root / div element!
  // of we can have a fragment <> </>
  return (
    <MovieProvider> 
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;