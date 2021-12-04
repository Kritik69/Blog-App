import Home from './Components/home/home'
import Page2 from './Components/Page2/page2'
import {BrowserRouter,Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Bollywood from './Components/bollywood/bollywood';
import Hollywood from './Components/hollywood/hollywood';
import Technology from './Components/technology/technology';
import Fitness from './Components/fitness/fitness'
import Food from './Components/food/food'

const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='fitness' element={<Fitness />} />
          <Route path='food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
