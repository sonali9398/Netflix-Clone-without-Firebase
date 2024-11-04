import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from "firebase/auth";
import {NETFLIX_LOGO, USER_LOGO} from '../utils/constant'

const Header = ({user}) => {
  const navigate = useNavigate()

  const handleSignedOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
    
  }
  return (
    <div>
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={NETFLIX_LOGO} alt="logo"/>
        </div>
        {user && (<div className='flex p-2'>
          <img className='w-12 h-12 ' src={USER_LOGO} alt='user'/>
          <button onClick={handleSignedOut} className='font-bold text-black'>Sign Out</button>
        </div>)}

    </div>
  )
}

export default Header
