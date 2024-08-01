import { UserContext } from './UserContext';
import { useContext } from 'react';

export const HomeScreen = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre aria-label='pre'>
        { JSON.stringify(user, null, 4)}
      </pre>
    </div>
  );
};
