import React from 'react';

// React Router Routing
import {
    createBrowserRouter,
  } from "react-router-dom";

// Screens 
import { LoginScreen } from '../Screens/Auth/login.screen'; // Login Auth screen
import { RegisterScreen } from '../Screens/Auth/register.screen'; // Register Auth Screen
import { HomeScreen } from '../Screens/App/home.screen';  // Home Screen
import { CreateScreen } from '../Screens/App/create.screen';
import { NoteScreen } from '../Screens/App/note.screen';
import { EditScreen } from '../Screens/App/edit.screen';

export const mainRouting = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen />,
        errorElement: <div>There was an error loading this page</div>
    },
    {
        path: '/login',
        element: <LoginScreen />
    },
    {
        path: '/register',
        element: <RegisterScreen />
    },
    {
        path: "/create",
        element: <CreateScreen />
    },
    {
        path: "/note",
        element: <NoteScreen />
    },
    {
        path: "/edit/:id",
        element: <EditScreen />
    }
])
