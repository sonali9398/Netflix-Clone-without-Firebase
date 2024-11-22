import React, { useEffect, useState } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for authentication status on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      // Mock user data since we aren't using Firebase
      const user = {
        uid: '12345',
        email: 'sonalik@gmail.com',
        displayName: 'Sonali K',
      };
      setIsAuthenticated(true);
      dispatch(addUser(user)); // Update Redux store
    } else {
      setIsAuthenticated(false);
      dispatch(removeuser());
    }
  }, [dispatch]);

  // Define your routes with proper redirection
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element:<Login />,
    },
    {
      path: '/browse',
      element: isAuthenticated ? <Browse /> : <Navigate to="/" />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
