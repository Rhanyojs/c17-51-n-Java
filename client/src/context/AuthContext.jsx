import { getCookie, removeCookie, setCookie } from '@/lib/cookies';
import { createContext, useContext, useState } from 'react';
// import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  if (!AuthContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return useContext(AuthContext);
}

const mockUserData = {
  id: 1,
  email: 'someone@example.com',
  username: 'someone',
  role: 'user',
  accessToken: 'evmjgmr2'
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return getCookie('user');
  });

  // console.log('user', user);

  const signIn = async () => {

    try {
      /* REPLACE REAL REQUEST */
      
      // const response = await axios.post('http://localhost:8080/auth/signin', {
      //   username: 'someone',
      //   password: 'password'
      // });

      // const { data } = response;

      setCookie('user', mockUserData, { expires: 1000 * 10 }); // 5 minutes
      setUser(mockUserData);
    } catch (error) {
      console.error('Error signing in', error);
    }


  }

  const signOut = () => {
    removeCookie('user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}