import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {

        const auth = getAuth();

        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => {
            alert(error.message);
        });
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
      )
}

export default Login
