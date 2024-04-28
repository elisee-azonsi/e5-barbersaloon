// useAuth.js

import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function useAuth() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming you stored the token in localStorage

    if (token) {
      // Token exists, user is logged in
      setIsLoggedIn(true);
    } else {
      // Token does not exist, user is not logged in
      setIsLoggedIn(false);
      // Redirect user to login page
      history.push('/login');
    }
  }, [history]);

  return isLoggedIn;
}

export default useAuth;
