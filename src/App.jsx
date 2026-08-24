import Home from './Pages/Home'
import './App.css'
import RecipieCard from './components/RecipeCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
