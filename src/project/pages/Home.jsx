import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import Thenavbar from '../Thenavbar'
import Theimages from '../Theimages'

function Home() {
    
  const [pics, setPics] = useState(null)
  const [loader, setloader] = useState(null)
  const [error, setEror]  = useState(null)


  const myStyle ={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "spacebetween"
}


  const fetchData = async (keyword) => {
    try {
        setPics(null)
        let response = await fetch(`https://api.pexels.com/v1/search?query=${keyword}$per_page=20`, {

        // https://api.pexels.com/v1/curated?per_page=1
            headers: {
                "Authorization": 'YUiGLLjRZN0XuGaLzQV2SYZvHtbCJ0HmhxBXdleelPpqYuNPITFmefiL'
            }

        })
        let data = await response.json()
        console.log(data)
        setloader(<Loader/>)
        setPics(data)

    } catch (error) {
     
        setloader(false)
        setEror("CHECK UR NETWORK PROVIDER SOMETHING WENT WRONG PLS TRY AGAIN LATER!!!")
        
    }

    if (error) {
        return <p>Error:{error.message}</p>
    }
}

useEffect(() => {
    fetchData()
}, [])
  

  return (
    <>
            <div></div>
            < Thenavbar  fetchData={fetchData}/>
          
            {pics == null ? loader: (
                <div style={myStyle}>{pics.photos.map((photo) => {
                    return (
                        <div >
                        <Theimages  
                         image={photo.src.medium} 
                        //  photographer={photo.photographer}
                         />
                       
                         <a href=  {photo.src.original}   download style={{textDecoration:"none",color:"black", display:"block", textAlign:"center"}} >Download

                            
                           
                         </a>
                         
                        </div>
                           
                    )
                    
                })}</div>
            )}
            <p style={{color:"red"}}>{error}</p>
        </>
  )
}

export default Home