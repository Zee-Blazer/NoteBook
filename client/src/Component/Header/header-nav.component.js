import React, { useState, useEffect } from 'react';

// Navigation
import { useNavigate } from 'react-router-dom';

// Firebase Authentication
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

// Styling
import '../../Styling/Component/header-nav.styles.css';

export const HeaderNav = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState("");

    useEffect( () => {
        const user = localStorage.getItem("user");
        setUser(JSON.parse(user));
    }, [] );

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
                localStorage.removeItem("user");
                navigate("/login");
                console.log("Signed out successfully")
            }).catch((error) => {
            // An error happened.
            });
    }

    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="#">{ user && user.email }</a>
                </div>
                <ul class="nav navbar-nav">
                <li class="active"><a href="/">Home</a></li>
                <li><a href="/create">Create</a></li>
                {/* <li><a href="#">Page 2</a></li> */}
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li><a 
                    onClick={ handleSignOut }
                ><span class="glyphicon glyphicon-log-in logout"></span> Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
