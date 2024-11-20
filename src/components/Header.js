// import React, { useEffect } from 'react'
// import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signOut } from "firebase/auth";
// import {NETFLIX_LOGO, USER_LOGO} from '../utils/constant'
// import { toggleGptSearchView } from '../utils/gptSlice';

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const user = useSelector((store) => store.user);

//   const handleSignedOut = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       navigate("/")

//     }).catch((error) => {
//       // An error happened.
//       navigate('/error')
//     }); 
//   }

//   const user = localStorage.getItem('isAuthenticated') === 'true';
//   const handleGptSearch = () => {  
//     //redux store to keep  
//     dispatch(toggleGptSearchView)
//   }
//   return (
//     <div>
//         <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
//             <img className='w-44' src={NETFLIX_LOGO} alt="logo"/>
//         </div>
//         {user && (<div className='flex p-2'>
//           <button className='px-2 m-2 text-black' onClick={handleGptSearch}>GPT Search</button>
//           <img className='w-12 h-12 ' src={USER_LOGO} alt='user'/>
//           <button onClick={handleSignedOut} className='font-bold text-black'>Sign Out</button>
//         </div>)}

//     </div>
//   )
// }

// export default Header


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_LOGO } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
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

  // Don't render user controls if on the login page
  if (location.pathname === '/') {
    return null;
  }

  return (
    // <div className=''>
    //   <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    //     <img className='w-44' src={NETFLIX_LOGO} alt="logo" />
    //   </div>
    //   {user && (
    //     <div className='flex p-2'>
    //       <button className='px-2 m-2 text-black' onClick={handleGptSearch}>GPT Search</button>
    //       <img className='w-12 h-12' src={USER_LOGO} alt='user' />
    //       <button onClick={handleSignedOut} className='font-bold text-black'>Sign Out</button>
    //     </div>
    //   )}
    // </div>


    <div className="relative w-full bg-black bg-opacity-80 z-10">
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        
        {user && (
          <div className="flex space-x-6 items-center text-white">
            <button 
              onClick={handleGptSearch}
              className="text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 transition"
            >
              GPT Search
            </button>

            <img className="w-10 h-10 rounded-md" src={USER_LOGO} alt="user" />

            <button
              onClick={handleSignedOut}
              className="font-bold text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800 transition"
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
