
import React, { useState, useEffect } from "react";
import { Menu } from "../Menu/Menu";
import Navigation from '../Navigation/Navigation';
import MainContent from '../MainContent/MainContent';
import InfoContent from '../InfoContent/InfoContent';
import { db } from '../../base'
import '@firebase/firestore'
import { useUserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, updateDoc, } from "firebase/firestore";
import "./HomePage.css"

const Homepage = () => {


    const [usersProfile, setUsersProfile] = useState({
        name: "",
        age: "",
        status: ""
    })
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(data);

        }
        getUsers()
    }, [])
    const createUserName = async (id) => {

        const userDoc = doc(db, "users", id)
        if (/\S/.test(usersProfile.name)) {
            const newFields = { name: usersProfile.name }
            await updateDoc(userDoc, newFields)
        }
        if (/\S/.test(usersProfile.age) && !!usersProfile.age) {
            const newFields = { age: usersProfile.age }
            await updateDoc(userDoc, newFields)
        }
        if (/\S/.test(usersProfile.status)) {
            const newFields = { status: usersProfile.status }
            await updateDoc(userDoc, newFields)
        }


        window.location.reload()

    }
    const userStatus = users.map((user) => user.status)
    const userId = (users.map((user) => user.id))
    console.log(usersProfile)
    console.log(users);
    return (
        <div className="back-content">
            <div className="wrapper_container" >

                <div className="main-block" >
                    <Navigation />
                    <MainContent

                        createUserName={createUserName}
                        userId={userId}
                        userStatus={userStatus}
                        usersProfile={usersProfile}
                        setUsersProfile={setUsersProfile}
                    />
                    <InfoContent />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
