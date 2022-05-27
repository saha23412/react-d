import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../contexts/AuthContext";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../base.js"
const Signup = () => {
    // const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        loading: false,
    });
    const { name, email, password, loading } = data;
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, loading: true })
        setError("");
        try {
            const result = await signUp(email, password);
            await setDoc(doc(db, 'users', result.user.uid), {
                uid: result.user.uid,
                name,
                email,
                password,
                createdAt: Timestamp.fromDate(new Date()),
                isOnline: true
            })

            setData({ name: "", email: "", password: "",loading:false })
        
            navigate("/");
        }
    
        catch (err) {
            setError(err.message);
            setData({...data,loading:false})
            
        }
    };

    return (
        <Container style={{ width: 500 }}>
            <div>
                <div className="p-4 box">
                    <h2 className="mb-3">Регистрация</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control
                                type="name"
                                name="name"
                                placeholder="Имя"
                                value={name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Почта"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                value={password}

                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button className="bg-success"
                                variant="primary"
                                disabled={loading}
                                type="Submit">

                                Зарегистрироваться
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="p-4 box mt-3 text-center">
                    У вас уже есть аккаунт? <Link to="/">Авторизоваться</Link>
                </div>
            </div>
        </Container>
    );
}

export default Signup;
