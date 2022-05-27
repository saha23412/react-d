import React,{useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Navbar.module.css'
import { auth, db } from '../../base';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import iconsPlacebo from '../../images/iconPlacebo.png'
import { Menu } from '../Menu/Menu';
const Navbar = () => {
    
    const {user}=useContext(AuthContext)

    return (

        <nav className={classes.nav}>
            <Link to='/communication' style={{color:'black'}}> <div className={classes.iconsLogo}>
                    <img src={iconsPlacebo} alt="iconsPlacebo" />
                    <span >В PLACEBO</span>
                </div></Link>
            <div>{
                user ?( <>
            
                    <Menu/>
                      
                </> ):( <>
                    <Link to='/register'>Регистрация</Link>
                    <Link to='/login'>Войти</Link>
                </>
                )
            }

            </div>
        </nav>
    );
}

export default Navbar;
