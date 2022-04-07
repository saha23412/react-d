import React from 'react';


import './MainBlock.css'
import Posts from './Sidebar/Posts/Posts';
import SideBar from './Sidebar/SideBar';
const MainBlock = ({setIsLoggedIn}) => {
    return (
        <>
            <SideBar setIsLoggedIn={setIsLoggedIn} />
            <Posts/>
        </>
    );
}

export default MainBlock;