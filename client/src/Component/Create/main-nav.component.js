import React, { useState, useEffect } from 'react';

// Firebase realtime Database
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';
import { DB } from '../../firebase';

export const CreateMainNavComponent = () => {

    const [editorState, setEditorState] = useState("");
    const [user, setUser] = useState("");

    useEffect( () => {
        setUser(JSON.parse(localStorage.getItem("user")));
        console.log(user);
    }, [] );

    const doSubmit = () => {
        push(
            ref(DB, `Notes/${user && user.uid}`),
            { note: editorState, userEmail: user && user.email }
        )
        // console.log(editorState)
        setEditorState("");
    }


    return (
        <div className='mainNav nav__cont'>

            <textarea 
                rows="4"
                cols="50"
                value={ editorState }
                onChange={ e => setEditorState(e.target.value) }
            /><br />

            <button
                onClick={ doSubmit }
            >Submit</button>
        </div>
    )
}
