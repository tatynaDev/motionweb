import React from 'react';
import malaysia from '../../../assets/img/malasia.svg'
import singapore from '../../../assets/img/singapore.svg'
import south from '../../../assets/img/southkorea.svg'
import russia from '../../../assets/img/russia.svg'
import turkey from '../../../assets/img/turkey.svg'
import german from '../../../assets/img/german.svg'

const StudyPrograms =  () =>{
    return (
        <section id='studyPrograms'>
            <div className="studyPrograms--general">
                <h1>Study Programs</h1>
                <Link to="/Malaysia"><img src={malaysia} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <Link to="/Singapore"><img src={singapore} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <Link to="/Singapore"><img src={south} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <Link to="/Korea"><img  src={russia} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <Link to="/Russia"><img  src={turkey} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <Link to="/German"><img src={german} alt="" style={{width:'100%', marginTop:'20px', position:'relative'}}/></Link>
                <h2>Motion Study - international educational agency</h2>
                <p>Our team supervises at all stages: selection and recommendation of the program, university and country for study, <br/>preparation for admission, paperwork and assistance in adapting to life abroad.</p>
                <p>We have helped more than 300 students get higher education abroad. For each, we have selected the most suitable and best <br/> option, taking into account all the criteria.</p>
                <p>We cooperate only with strong and proven universities abroad. Our portfolio includes leading universities in America, Great <br/>Britain, Australia, Canada, Switzerland, Italy, Spain and other countries of the world.</p>
                <button>Get consultation</button>
            </div>
        </section>
    )
};

export default StudyPrograms