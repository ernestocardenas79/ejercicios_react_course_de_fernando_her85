import { About } from './About';
import { Login } from './Login';
import { HomeScreen } from './HomeScreen';
import {
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route  path='/' element={<HomeScreen/>} />
      <Route  path='about' element={<About/>} />
      <Route  path='login' element={<Login/>} />
      <Route  path='/*' element={<Navigate to="/login"/>} />
    </Routes>
  );
};
