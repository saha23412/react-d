import React from 'react'
import classes from '../Navigation/Navigation.module.css'
import iconsNews from '../../images/free-iconNew.png'
import iconsMessages from '../../images/free-icon-message.png'
import iconsSettings from '../../images/free-iconSettings.png'
import iconsCommunities from '../../images/free-iconСommunities.png'
import iconsProfile from '../../images/free-iconProfile.png'
import HomeFront from '../HomeFront/HomeFront'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>


            <nav className={classes.nav}>
                <ul className={classes.naviagation}>
                    <Link to="profile"  className={classes.linkNav}> <img src={iconsProfile} alt="iconsProfile" /> Моя страница </Link>
                    <Link to="messages" className={classes.linkNav}><img src={iconsMessages} alt="iconsMessages" />Мессенджер </Link>
                    <Link to="communication" className={classes.linkNav}> <img src={iconsCommunities} alt="iconsCommunities" />Сообщества</Link>
                    <Link to="news"  className={classes.linkNav}><img src={iconsNews} alt="iconsNews" />Новости </Link>
                    <Link to="settings" className={classes.linkNav}> <img src={iconsSettings} alt="iconsSettings" />Настройки </Link>
                </ul>

            </nav>

        </>
    )
}
export default Navigation
