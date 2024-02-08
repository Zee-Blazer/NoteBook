import React, { useState, useEffect } from 'react';

// Styling
import '../../Styling/Screen/App/home.styles.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Firebase
import { ref, onValue, remove } from 'firebase/database';
import { DB } from '../../firebase';

import { HeaderNav } from '../../Component/Header/header-nav.component';

export const HomeScreen = () => {

    document.title = "Home";

    const navigation = useNavigate();

    const [data, setData] = useState();

    useEffect( () => {
        onValue(
            ref(DB, `Notes/${JSON.parse(localStorage.getItem("user")).uid}`),
            ( snapshot ) => {
                const data = [];
                snapshot.forEach(childSnapshot => {
                    data.push({
                        id: childSnapshot.key, ...childSnapshot.val()
                    })
                })
                setData(data);
            }
        )
    }, [] )

    const sendSomewhere = (place) => {
        navigation(`/edit/${place}`)
    }


    const doDelete = (item) => {
        remove(
            ref(DB, `Notes/${JSON.parse(localStorage.getItem("user")).uid}/${item}`)
        )
    }

    return (
        <div>
            <HeaderNav />

            { data && data.map( e => (
                <div style={{ backgroundColor: "white", margin: "4px" }}>
                    { e.note }
                    <div>
                        <p style={{ color: "green" }}
                            onClick={ () => sendSomewhere(e.id) }
                        >edit</p>
                        <p style={{ color: "red" }}
                            onClick={ () => doDelete(e.id) }
                        >delete</p>
                    </div>
                </div>
            ) ) }
        </div>
    )
}
