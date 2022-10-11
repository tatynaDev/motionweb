import React from 'react';
import photo from '../../../assets/img/content.png'
import students from '../../../assets/img/students.png'
import con1 from '../../../assets/img/con1.svg'
import con2 from '../../../assets/img/con2.svg'
import con3 from '../../../assets/img/con3.svg'
import con4 from '../../../assets/img/con4.svg'
import st1 from '../../../assets/img/st1.svg'
import st2 from '../../../assets/img/st2.svg'
import st3 from '../../../assets/img/st3.svg'
import st4 from '../../../assets/img/st4.svg'
import st5 from '../../../assets/img/st5.svg'
import st6 from '../../../assets/img/st6.svg'
import {BsArrowDown} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import gr from '../../../assets/img/Group 113.svg'
import gro from '../../../assets/img/Group 113-2.svg'
import {BsArrowRightCircle} from 'react-icons/bs'
import background from '../../../assets/img/Back.png'
import korea from '../../../assets/img/koreanfl.svg'
import korean from '../../../assets/img/korean.svg'
import america from '../../../assets/img/americanfl.svg'
import american from '../../../assets/img/american.svg'
import {BsArrowRight} from "react-icons/bs"
const Content = () => {
    return (
        <section id='content'>
            <div className="content--general">
                <img className='image' src={photo} alt=""/>
                <h1>Motion Study-your navigator in education abroad!</h1>
                <p>
                    Our goal is to select the most suitable educational institution for the future student. We gradually
                    lead clients from preparation to admission, passing all exams, paperwork.
                </p>
                <p>
                    Our students study in USA, Canada, UK, Spain, Italy, Belgium, Netherlands, Germany, Switzerland,
                    Austria, Hungary, Czech Republic, Poland, Latvia, Estonia, Turkey, Korea, China, Malaysia, UAE and
                    Cyprus..
                </p>
                <p>
                    We helped students get 100%, 75% and 50% scholarships and enter such specialties as medicine,
                    design, engineering, psychology, economics, business administration, hospitality.
                </p>
                <p>
                    With us you can start learning a foreign language abroad, get secondary and higher education and
                    start a career abroad.
                </p>
                <img className='content--general__students' src={students} alt=""/>
                <div className="content--general__square-one">
                    <h5>2020</h5>
                    <p> We have been advising children and adults on education abroad for more than 2 years</p>
                </div>
                <div className="content--general__square-two">
                    <h4>90%</h4>
                    <p>Almost all students enroll in their chosen study programs in schools or universities in different
                        countries</p>
                </div>
                <div className="content--general__square-three">
                    <h3>200+</h3>
                    <p>We cooperate with language centers, schools and universities around the world where our students
                        go</p>
                </div>
                <h1>Our benefits</h1>
                <div className='arrow'>
                    <BsArrowDown style={{
                        color: 'white',
                        fontSize: '28px'
                    }}/>
                </div>
                <div className="content--general__benefits">
                    <img src={con1} alt=""/>
                    <img src={con2} alt=""/>
                    <img src={con3} alt=""/>
                    <img src={con4} alt=""/>
                </div>
                <h1>Our staff</h1>
                <div className="content--general__staffs">
                        <div className="content--general__staffs--staff">
                            <img src={st1} alt=""/>
                            <img src={st2} alt=""/>
                            <img src={st3} alt=""/>
                        </div>
                        <div className="content--general__staffs--staff">
                            <img src={st4} alt=""/>
                            <img src={st5} alt=""/>
                            <img src={st6} alt=""/>
                        </div>
                </div>
                <h2>Watch live broadcasts with our students and catch announcements about scholarships!</h2>
                <div className="content--general__view">
                    <div>
                        <h1><span><BsInstagram style={{color: 'white', fontSize:'18px'}}/></span> INSTAGRAM</h1>
                        <img src={gr} alt=""/>
                    </div>
                    <div>
                        <h1><span><FaTelegramPlane style={{color: 'white', fontSize:'20px'}}/></span> TELEGRAM</h1>
                        <img src={gro} alt=""/>
                    </div>
                </div>
                <div className='content--general__btn'>
                    <button>view more <BsArrowRightCircle style={{color:'white', fontSize:'18px', paddingTop:'10px'}}/></button>
                </div>
                <div className='content--general__more'>
                    <img className='content--general__more--back' src={background} alt=""/>
                    <img className='content--general__more--korea' src={korea} alt=""/>
                    <img className='content--general__more--american' src={american} alt=""/>
                    <img className='content--general__more--america' src={america} alt=""/>
                    <img className='content--general__more--korean' src={korean} alt=""/>
                    <BsArrowRight style={{position:'absolute',left: '625px',
                        top: '4070px', color:'white',fontSize:'36px'}}/>
                    <BsArrowRight style={{position:'absolute',left: '625px',
                        top: '4410px', color:'white',fontSize:'36px',transform: 'rotate(180deg)'}}/>
                    <button>Get consultation</button>
                </div>
            </div>
        </section>
    );
};
export default Content