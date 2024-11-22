import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, SUPPORTED_LANG, USER_LOGO } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch();

  const handleSignedOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate('/error');
    });
  };

  const user = localStorage.getItem('isAuthenticated') === 'true';
  
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanChange = (e) =>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
  // Don't render user controls if on the login page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="relative w-full bg-black bg-opacity-80 z-10">
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        
        {user && (
          <div className="flex space-x-6 items-center text-white">
            <select className='p-2 bg-gray-200 text-black rounded-md' onChange={handleLanChange} >
              {
                SUPPORTED_LANG.map((lan) =>(
                    <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
                ))
              }
            </select>
            <button 
              onClick={handleGptSearch}
              className="text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 transition bg-red-700"
            >
              GPT Search
            </button>

            <img className="w-10 h-10 rounded-md" src={USER_LOGO} alt="user" />

            <button
              onClick={handleSignedOut}
              className="font-bold text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 transition  bg-red-700"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
