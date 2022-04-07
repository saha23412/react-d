import React from 'react'
import avatar from '../../../../../../images/ava.jpg'

import './User.css'
export const User = () => {
    return (
    
            <div className='user'>
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <h3>Naruto</h3>
            </div>
        
    )
}
export default User