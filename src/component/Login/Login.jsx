import React, { useState } from 'react';
import classes from './Login.module.css'
import { setDoc,doc,Timestamp,updateDoc } from 'firebase/firestore';
import { auth, db } from '../../base';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import MyButton from '../UI/Button/Button';
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
        loading: false,
    })
    const navigate = useNavigate()
    const {  email, password, error, loading } = data
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setData({...data,error:null,loading:true})
        if ( !email || !password) {
            setData({ ...data, error: "Ошибк пользователя" })
        }
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            await updateDoc(doc(db,'users',result.user.uid),{
            
                isOnline:true
            })
            setData({email:'',password:'',error:null,loading:false})
            navigate("/")
        } catch (err) {
            setData({...data,error:err.message,loading:false})
        }

    }
    return (
        <section>
            <h3>Войти в аккаунт</h3>
            <form className={classes.form} onSubmit={handleSubmit}>
               
                <div className={classes.input_container}>
                    <label htmlFor="email">Почта</label>
                    <input type="text" name="email" value={email} onChange={handleChange} />
                </div>
                <div className={classes.input_container}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                {error ? <p className={classes.error}>{error}</p> : null}
                <div className={classes.bth_container}>
                    <MyButton disabled={loading}>{
                        loading?'Входим...':'Войти'
                    }</MyButton>
                </div>
            </form>
        </section>
    );
}

export default Login;
