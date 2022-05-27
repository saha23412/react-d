import React from 'react'
import classes from '../MainContent/MainContent.module.css'
import { Routes, Route } from 'react-router-dom'
import News from '../MainContent/News/News'
import Profile from './../MainContent/Profile/Profile';
import Message from './../MainContent/Message/Message';
import Communition from '../MainContent/Communition/Communition'
import MainSettings from '../MainContent/MainSettings/MainSettings'
import HomeFront from '../HomeFront/HomeFront';
const MainContent = ({ nameUser, createUserName, userId, userStatus, usersProfile, setUsersProfile }) => {
  return (
    <div className={classes.MainContent}>
      <div className={classes.routeContent}>
        <Routes>
          <Route path='profile' element={<Profile  userStatus={userStatus} />} />
          <Route path='messages' element={<Message />} />
          <Route path='communication' element={<Communition />} />
          <Route path='news' element={<News />} />
          {/* <Route path='settings' element={
            <MainSettings
              userId={userId}
              createUserName={createUserName}
              usersProfile={usersProfile}
              setUsersProfile={setUsersProfile}
            />}

          /> */}
        </Routes>
      </div>
    </div>
  )
}
export default MainContent