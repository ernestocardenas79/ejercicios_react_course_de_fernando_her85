import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useState } from 'react';
import { HomeScreen } from './HomeScreen';
import { About } from './About';
import { Login } from './Login';
import { Navbar } from './Navbar';

import './styles.css'

export const MainApp = () => {
 const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Navbar />
      <hr />
              
      <Routes>
          <Route  path='/' element={<HomeScreen/>} />
          <Route  path='about' element={<About/>} />
          <Route  path='login' element={<Login/>} />
          <Route  path='/*' element={<Navigate to="/login"/>} />
      </Routes>   
    </UserContext.Provider>
  );
};


   