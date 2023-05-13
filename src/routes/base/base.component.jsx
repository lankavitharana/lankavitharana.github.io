import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const Base = () => {
    return (
        <Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </Fragment>
    );
}

export default Base;