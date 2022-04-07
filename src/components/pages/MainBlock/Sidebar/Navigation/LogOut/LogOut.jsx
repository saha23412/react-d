import React from 'react'
import iconExit from '../../../../../../images/icon-exit.png'
import './LogOut.css'
export const LogOut = ({setIsLoggedIn}) => {
    const logOut = ()=>{
        setIsLoggedIn(false)
    }
    return (
        <section className="sidebarBottom">

            <button onClick={logOut}>
                <img src={iconExit} alt="exit" />
                Выход
            </button>
        </section>
    )
}
export default LogOut