import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import BreweryDetails from './components/BreweryDetails.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brewery/:id" element={<BreweryDetails />} />
    </Routes>
  );
}

export default App;
