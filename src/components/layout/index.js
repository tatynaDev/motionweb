import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
const layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default layout;