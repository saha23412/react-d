import React from 'react';
import './LoginPage.css'
const LoginPage = ({ setIsLoggedIn }) => {
    const logIn = () => setIsLoggedIn(true)
    return (
        <form onSubmit={logIn} className="loginPage">
            <h2>Вход</h2>
            <div>
                <input type="text" placeholder='логин' name='login' required />
            </div>
            <div>
                <input type="password" placeholder='пароль' name='password'  required/>
            </div>
            <div>
                <button type='submit'>Войти</button>
            </div>
        </form>
    );
}

export default LoginPage;