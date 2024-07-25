import { useContext } from 'react';
import { UserContext } from './UserContext';

export const Login = () => {
  const {setUser} = useContext(UserContext);
  const user = {
    id:774,
    name:'Ernesto'
  }
  return (
    <div>
      <h1>Login</h1>
      <button className="btn btn-primary" onClick={()=>setUser(user)}>
        Login
      </button>
    </div>
  );
};
