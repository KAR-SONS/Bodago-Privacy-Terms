import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Terms from './Components/Terms'
import Privacy from './Components/Privacy'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
    </Router>
  )
}

export default App