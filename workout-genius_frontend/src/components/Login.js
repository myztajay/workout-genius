import React from 'react';


const Login  = ({ loggedIn, logInWithFacebook }) => ( 
  <div>
    <a href='/api/auth/facebook' target='_self'> facebook</a>
    <h1> Login Component {loggedIn}</h1>
    <button onClick={logInWithFacebook}> Login with Facebook</button>
    <button> Sign up with Facebook</button>
  </div>
)


export default Login