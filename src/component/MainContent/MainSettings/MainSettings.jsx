// import React from 'react'
// import MyInput from '../../UI/MyInput/MyInput'
// import classes from './MainSettings.module.css'
// import { useNavigate } from 'react-router-dom'
// import { useUserAuth } from '../../contexts/AuthContext'
// import { Button } from 'react-bootstrap';
// const MainSettings = ({ createUserName, userId, setUsersProfile, usersProfile }) => {
//     const { logOut, user } = useUserAuth();
//     const navigate = useNavigate();
//     const handleLogout = async () => {
//         try {
//             await logOut();
//             navigate("/");
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//     return (
//         <div className={classes.MainSettingsContainer}>
//             <div className={classes.MainSettings}>
//                 <p>Изменить имя</p>
//                 <div className={classes.blockInteraction}>
//                     <MyInput
//                         className={classes.inpMyInp}
//                         placeholder="Name..."
//                         onChange={(event) => { setUsersProfile({ ...usersProfile, name: event.target.value }) }} />

//                 </div>
//             </div>
//             <div className={classes.MainSettings}>
//                 <p>Изменить возраст</p>
//                 <div className={classes.blockInteraction}>
//                     <MyInput
//                         className={classes.inpMyInp}

//                         placeholder="Age..."
//                         onChange={(event) => { setUsersProfile({ ...usersProfile, age: event.target.value }) }}

//                     />

//                 </div>
//             </div>
//             <div className={classes.MainSettings}>
//                 <p>Изменить статус</p>
//                 <div className={classes.blockInteraction}>
//                     <MyInput
//                         className={classes.inpMyInp}

//                         placeholder="Status..."
//                         onChange={(event) => { setUsersProfile({ ...usersProfile, status: event.target.value }) }}

//                     />

//                 </div>
//                 <button onClick={() => createUserName(userId.join())}>Сохранить изменения</button>
//                 <button onClick={handleLogout}>Выйти</button>

//             </div>
//         </div>
//     )
// }
// export default MainSettings