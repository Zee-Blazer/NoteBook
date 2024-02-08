import React, { useState } from 'react';

// Styling
import "../../Styling/Screen/Auth/register.css";

// Navigation
import { useNavigate } from 'react-router-dom';

// Firebase Authentication
import { auth } from '../../firebase';
import {  signInWithEmailAndPassword  } from 'firebase/auth';

// Material UI icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const LoginScreen = () => {

    document.title = "Sign In";

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/create");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return (
        <div className='login__container'>
            <div className='login__box'>
                
                <div className='center__title'>
                    <AccountCircleIcon className='account__icon' fontSize='158px' />
                    <h4>USER LOGIN </h4>
                    <p 
                        className="another__link"
                        onClick={ () => navigate('/register') }
                    >Register</p>
                </div>

                <form>
                    
                    <div className='input__cont'>
                        <AccountCircle className='input__icon' />
                        <input 
                            type='text' 
                            placeholder='Username' 
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </div>

                    <div className='input__cont'>
                        <LockOpenIcon className='input__icon' />
                        <input 
                            type='password' 
                            placeholder='Password' 
                            value={ pass }
                            onChange={ e => setPass(e.target.value) }
                        />
                    </div>

                    <button 
                        className='login__btn'
                        onClick={ onLogin }
                    >LOGIN</button>

                </form>

            </div>
        </div>
    )
}
