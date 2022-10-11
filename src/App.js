import Hero from "./components/hero/hero";
import Content from './components/pages/content/content'
import {Routes, Route} from "react-router-dom";
import React from "react";
import ContentTwo from "./components/pages/content-two/content-two";
import StudyProgram from "./components/pages/study programs/study programs";
import Malaysia from "./components/pages/Malaysia/Malaysia";
import Singapore from "./components/pages/Singapore/Singapore";
import Russia from "./components/pages/Russia/Russia";
import Turkey from "./components/pages/Turkey/Turkey";
import German from "./components/pages/German/German";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="content" element={<Content/>}/>
                <Route path="content-two" element={<ContentTwo/>}/>
                <Route path="study programs" element={<StudyProgram/>}/>
           
                <Route path="Malaysia" element={<Malaysia/>}/>
                <Route path="Singapore" element={<Singapore/>}/>
                <Route path="Russia" element={<Russia/>}/>
                <Route path="Turkey" element={<Turkey/>}/>
                <Route path="German" element={<German/>}/>
            </Routes>
        </div>
    );
}

export default App;
