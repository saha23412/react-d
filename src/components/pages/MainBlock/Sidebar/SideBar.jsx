import React from 'react';
import LogOut from './Navigation/LogOut/LogOut';

import Navigation from './Navigation/Navigation';
import User from './Navigation/User/User';
import './SideBar.css'
const SideBar = ({setIsLoggedIn}) => {
    return (
        <aside className='sidebar'>
            <section className='sidebarTop'>
                <User />
                <Navigation />
            </section>
            <LogOut setIsLoggedIn={setIsLoggedIn} />
        </aside>
    );
}

export default SideBar;