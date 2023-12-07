import React, { useState } from 'react'

function Thenavbar({fetchData}) {

    const [searchInput, setSearchInput] = useState('')

    const myNav ={
        width:"100%",
        boxShadow: `1px 1px 15px #ddd`,
        background:`white`,
        display: "flex",
        justifyContent:"space-between"
        
    }

    const text ={
        padding:"10px 30px",
        fontSize:'16pt',
        display:"flex",
        
        alignItems:"center"
    }

    const myinput = {
        width: "60%",
        fontSize: "17px",
        textTransform: "capitalize",
        background: "#e6f5fb",
        padding: "5px 1px",
        borderRadius: "14px",
        marginTop:"0.3rem",
       
    
    }

    const but = {
        color: "black",
        background: "#ababab",
        width: "25%",
        height: "33px",
        background:"#e6f5fb",
        borderRadius: "20%",
        cursor:"pointer",
        fontSize: "12px",
        marginLeft:"1rem"
      
      

    }

    function change(e){
        setSearchInput((e.target.value))
    }

    const click = ()=>{
        fetchData(searchInput)
    }




  return (
    <>
    <nav style={myNav}>
     <div style={text}>
     {/* Pexel project */}
     </div>
     <div>
         <input type="text"  style={myinput} onChange={change}   onClick={click}  placeholder='search for....' />
         <button onClick={click} style={but}>Search</button>
       
     </div>
    </nav>
    </>
  )
}

export default Thenavbar