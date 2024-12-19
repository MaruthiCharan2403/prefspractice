import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import Artists from './Components/Artists'
import Add from './Components/Add'
function App() {
  return (
    <>
      <Router>
        <nav>
          <div>
            <span>Music App</span>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/'>View</Link>
              </li>
              <li>
                <Link to='/add'>Add</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Artists/>}/>
          <Route path = '/add' element={<Add/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
