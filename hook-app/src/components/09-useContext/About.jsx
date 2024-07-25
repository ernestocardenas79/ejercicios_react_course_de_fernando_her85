import { useContext } from 'react';
import { UserContext } from './UserContext';

export const About = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <h1>About</h1>
      <hr/>

      <pre>
        {JSON.stringify(user,null, 4)}
      </pre>

      <button className="btn btn-warning" onClick={()=>setUser({})}>Logout</button>
    </div>
  );
};
