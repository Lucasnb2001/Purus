import './App.css'
import {HomePage, NavBar, ShoppingCart} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
