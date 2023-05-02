import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../NavbarPage/Header';
import Footer from '../Page/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;