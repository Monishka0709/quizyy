import React from 'react'
import '../Login.css'
import Logo from '../assets/login.svg'
import { isValidUsername, useInputValidation, useStrongPassword } from '6pp';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const usernameValidator = (username) => {
        if (!isValidUsername(username))
            return { isValid: false, errorMessage: "Username is Invalid" };
    }

    const username = useInputValidation("",usernameValidator);
    const password = useStrongPassword("");

    const handleLogin = async(e) => 
        {
            e.preventDefault();
            if(!username.isValid)
            toast.error("Please Enter valid email", {autoClose: 5000});    

            else if(!password.isValid)
            toast.error("Please Enter valid password", {autoClose: 5000});
        }

    
  return (
    
      <div className="modal">
        <div className="modal-bg">
            
            <div className='login-png-container'>
                <img src={Logo}/>

            </div>
            <div className='login-form-container'>
                
                
                
            <div className="modal-1">
                <h1>Login</h1>
                
            </div>
            <div className="login">
                <input type="email" placeholder="Enter your email" className="input--field" value={username.value} onChange={username.changeHandler} id='emailField' />

                <input type="password"  placeholder="Enter your password" className="input--field" value={password.value} onChange={password.changeHandler} id='passwordField' />

                <button placeholder="Login" id="loginbtn" 
                onClick={handleLogin}
                >Login</button>

                <div className='p'>
                    Not a member? <a href="#" className="register">Register</a>
                
                </div>
                {<ToastContainer />}
            </div>
            </div>
        
        </div>
    </div>
    
  )
}

export default Login
