import React, { BrowserRouter as Router,Routes, Route ,Link} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Links from './Links'





function Pexel() {

  return (
    <div style={{ background: 'rgb(157, 179, 198)'}}>Pexel Project

      <Router>
        <Links/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/*' element={<p>page not found</p>}/>

          
        </Routes>
      </Router>
     
     
    </div>
  )
}

export default Pexel