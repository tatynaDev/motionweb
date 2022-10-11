import React from 'react';
import photo from '../../assets/img/content.png'
const Content = () =>{
    return (
        <section id='content'>
            <div className="content--general">
                <img className='image' src={photo} alt=""/>
            </div>
    </section>
    );
};
export default Content