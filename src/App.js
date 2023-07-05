import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Component/utility/Footer';
import Navbar from "./Component/utility/Navbar";
import ExercisesPage from './pages/Exercises/ExercisesPage';
import HomePage from "./pages/Home/HomePage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ExercisesPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
