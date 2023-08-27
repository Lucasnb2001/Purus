import {HomePage, NavBar, ShoppingCart, Sucess} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
          <Route path='/sucess' element={<Sucess/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
