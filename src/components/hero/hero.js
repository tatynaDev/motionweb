import React from 'react';
import photo from '../../assets/img/photo.png'

const Hero = () =>{
    return(
        <section id='hero'>
            <div className="container">
                <div className="hero--general">
                    <div className="hero--general__title">
                        <h1>We help our students get into the best universities in the world</h1>
                        <button>GET CONSULTATION</button>
                    </div>

                        <img className='hero--general__second-photo' src={photo} alt=""/>
                        <div className="hero--general__square"></div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
