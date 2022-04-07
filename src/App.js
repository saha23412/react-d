
import React, { useState } from 'react';
import '../src/App.css'
import MainBlock from './components/pages/MainBlock/MainBlock';
import LoginPage from './components/pages/LoginPage/LoginPage';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {

        isLoggedIn ? (
          <MainBlock setIsLoggedIn={setIsLoggedIn} />
        ) : (

          <LoginPage setIsLoggedIn={setIsLoggedIn} />

        )
      }

    </div>
  );
}

export default App;
