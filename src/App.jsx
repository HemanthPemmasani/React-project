import './App.css'
import Home from './Components/Pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Products from './Components/Pages/Products'
import Navbar from './Components/Navbar'
function App() {
  

  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
