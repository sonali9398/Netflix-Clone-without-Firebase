// import React, { useRef, useState } from "react";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [isSignIn, setIsSignIn] = useState(true);
//     const [errMsg, setErrMsg] = useState(null);

//     const navigate = useNavigate();

//     const email = useRef(null);
//     const password = useRef(null);
//     const name = useRef(null);

//     const toggleSignIn = () => {
//         setIsSignIn(!isSignIn);
//     };

//     const handleButtonClick = () => {
//         // Hardcoded credentials
//         const allowedEmail = "sonalik@gmail.com";
//         const allowedPassword = "Netflix@123";

//         const enteredEmail = email.current.value;
//         const enteredPassword = password.current.value;

//         // Check if the entered credentials match the allowed ones
//         if (enteredEmail === allowedEmail && enteredPassword === allowedPassword) {
//             navigate('/browse');
//         } else {
//             setErrMsg("Invalid email or password");
//         }
//     };

//     return (
//         <>
//             <Header />

//             <div className="absolute">
//                 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg" alt="bg" />
//             </div>

//             <form onSubmit={(e) => e.preventDefault()} className="absolute w-4/12 p-12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
//                 <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
//                 {!isSignIn && (
//                     <input type="text" placeholder="Enter a Name" ref={name} className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg" />
//                 )}
//                 <input type="text" placeholder="Enter a Email" ref={email} className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg" />
//                 <input type="password" placeholder="Password" ref={password} className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg" />

//                 <p className="text-red-600">{errMsg}</p>

//                 <button className="p-4 my-4 bg-red-700 w-full rounded-lg font-bold text-xl" onClick={handleButtonClick}>
//                     {isSignIn ? "Sign In" : "Sign Up"}
//                 </button>

//                 <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
//                     {isSignIn ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}
//                 </p>
//             </form>
//         </>
//     );
// };

// export default Login;



import React, { useRef, useState } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // Hardcoded credentials
  const allowedEmail = 'sonalik@gmail.com';
  const allowedPassword = 'Netflix@123';

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // Check if the entered credentials match the allowed ones
    if (enteredEmail === allowedEmail && enteredPassword === allowedPassword) {
      // Store authentication status in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/browse'); // Redirect to browse page
    } else {
      setErrMsg('Invalid email or password');
    }
  };

  return (
    <>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter a Name"
            ref={name}
            className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Enter an Email"
          ref={email}
          className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-2 w-full bg-black border border-gray-400 rounded-lg"
        />

        <p className="text-red-600">{errMsg}</p>

        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg font-bold text-xl"
          onClick={handleButtonClick}
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? 'New to Netflix? Sign Up Now' : 'Already a user? Sign In Now'}
        </p>
      </form>
    </>
  );
};

export default Login;
