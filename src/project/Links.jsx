import React from 'react'
import { Link } from 'react-router-dom'



function Links() {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
       <Link to='/' style={{textDecoration:"none"} }className='home'>Home</Link>
       <Link to='/About' style={{textDecoration:"none",}}>About</Link>
       {/* <Link to='*' style={{textDecoration:"none"}}>not found</Link> */}
    </div>
  )
}

export default Links  