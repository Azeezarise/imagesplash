import React from 'react'

function Theimages({ image,  portrait }) {

    const content = {
        background: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "15rem",
        height: "20rem",
        margin: "20px",
        boxShadow: '1px 1px 1px 15px grey',
    }

    return (
        <div style={content}>
           {}
            <h2>{portrait}</h2>
           
        </div>
    )
}

export default Theimages