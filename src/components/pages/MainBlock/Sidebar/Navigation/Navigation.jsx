import React from 'react'
import './Navigation.css'
import iconSettings from '../../../../../images/icon-settings.png'
import iconBlog from '../../../../../images/icon-blog.png'
import iconFavorite from '../../../../../images/icon-favorite.png'
export const Navigation = () => {
    return (
        
            <nav className='nav'>
                <a href="#s">
                    <img src={iconBlog}  alt="blog" />
                    <span>Blog</span>
                </a>
                <a href="#s">
                    <img src={iconFavorite} alt="favorite" />
                    <span>Favorite</span>
                </a>
                <a href="#s">
                    <img src={iconSettings} alt="settings" />
                    <span>Settings</span>
                </a>



            </nav>
      
    )
}
export default Navigation;
