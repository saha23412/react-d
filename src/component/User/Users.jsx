import React from 'react';
import classes from './Users.module.css'
import Img from '../../images/avatarjpg.jpg'
const Users = ({ user, selectUser }) => {
    return (
        <div className={classes.user_wrapper} onClick={() => selectUser(user)}>
            <div className={classes.user_info}>
                <div className={classes.user_information}>
               
                <img src={user.avatar || Img} alt="avatar" className={classes.avatar} />
                    <h4 className={classes.user_name}>{user.name}</h4>
               
                    
                </div>
            </div>
        </div>
    );
}

export default Users;
