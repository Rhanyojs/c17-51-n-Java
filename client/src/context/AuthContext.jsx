// create an auth context using cookies to store the user's token
// and get the user's token from the cookies
// signIn and signOut functions to set and remove the token from the cookies

import { getCookie, removeCookie, setCookie } from '@/lib/cookies';
import { createContext, useContext, useState } from 'react';

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

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return getCookie('user');
  });

  console.log('user', user);

  const signIn = () => {
    // setCookie('token', token, { expires: 1 });
    setCookie('user', mockUserData, { expires: 1 });
    setUser(mockUserData);
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