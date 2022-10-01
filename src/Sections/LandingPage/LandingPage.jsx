import React from 'react'


//IMPORT IMAGE


import Hero from "../../image/image 2.png"


const LandingPage = () => {

    return (
        <div className='LandingPage'>
            <div className="header">
                <div className="logo"><h3>LandPage</h3></div>
                <div className="navlinks">
                    <a href="/" className="link">Home</a>
                    <a href="/" className="link">About</a>
                    <a href="/" className="link">Book</a>
                </div>
            </div>
            <div className="Hero-container">
            <div className="Text">
                <h1>Title</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, fugiat.</p>
                <button className='btn'>Book</button>
            </div>
            <div className="ImageContainer">
                <img src={Hero} alt="" />
            </div>
            </div>
            
        </div>
    )
}

export default LandingPage;
