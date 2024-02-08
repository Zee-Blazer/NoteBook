import React, { useState } from 'react';

// Params
import { useParams } from 'react-router-dom';

// Firebase
import { DB } from '../../firebase';

import { HeaderNav } from "../../Component/Header/header-nav.component"

export const EditScreen = () => {

    const [data, setData] = useState();

    const params = useParams();

    // useEffect( () => {
    //     onValue(
    //         ref(DB, `Notes/${JSON.parse(localStorage.getItem("user")).uid}/${params}`),
    //         ( snapshot ) => {
                
    //             setData(snapshot);
    //             console.log(data);
    //         }
    //     )
    // }, [] );

    return (
        <div>
            <HeaderNav />

            Please sorry I wasn't on time to build this perfectly well

            <textarea 
                rows="4"
                cols="50"
            /><br />
            
            <button>Edit</button>
        </div>
    )
}
