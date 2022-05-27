import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Register from "./component/Register/Register";
import Homepage from './component/HomePage/HomePage';
import Login from "./component/Login/Login";
import Home from "./component/HomePage/Home/Home";
import AuthProvider from "./component/contexts/AuthContext";
import PrivateRouter from "./component/PrivateRouter/PrivateRouter";
const App = () => {
  return (

    // <RegisterBlock/>
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route  path='/register' element={<Register />} />
          <Route  path='/login' element={<Login />} />
          <Route  path="/*" element={
            <PrivateRouter>
              <Homepage />
            </PrivateRouter>
          } />

        </Routes>
      </AuthProvider>
    </>
  )

};
export default App;