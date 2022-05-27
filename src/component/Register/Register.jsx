import React, { useState } from 'react';
import classes from './Register.module.css'
import MyButton from '../UI/Button/Button';
import { setDoc,doc,Timestamp } from 'firebase/firestore';
import { auth, db } from '../../base';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: null,
        loading: false,
    })
    const navigate = useNavigate()
    const { name, email, password, error, loading } = data
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setData({...data,error:null,loading:true})
        if (!name || !email || !password) {
            setData({ ...data, error: "Ошибк пользователя" })
        }
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            await setDoc(doc(db,'users',result.user.uid),{
                uid:result.user.uid,
                name,
                email,
                createdAt:Timestamp.fromDate(new Date()),
                isOnline:true
            })
            setData({name:'',email:'',password:'',error:null,loading:false})
            navigate("/")
        } catch (err) {
            setData({...data,error:err.message,loading:false})
        }

    }
    return (
        <section>
            <h3>Создайте аккаунт</h3>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.input_container}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </div>
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
                    <MyButton  disabled={loading}>
                    {
                        loading?'Создаем аккаунт...':'Регистрация'
                    }
                    </MyButton>
                </div>
            </form>
        </section>
    );
}

export default Register;
