import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { signOut } from '../../services/auth';

export default function Homepage() {
  const [description, setDescription] = useState('');
  const { user, setUser } = useContext(UserContext);
  

  if (!user) { 
    return <Redirect to='/auth/sign-in' />;
  }

  const signOutHome = async () => {
    signOut();
    setUser(null);
  };

  return (
    <>
      <div>
        <button onClick={signOutHome}>Sign Out</button>
      </div>
      <div>
        <div>
          <input type='text'
            value={description}
            onChange={e => setDescription(e.target.value)}/>
        </div>
      </div>  
    </>
  );
}