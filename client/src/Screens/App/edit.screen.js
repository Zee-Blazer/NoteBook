import React, { useState } from 'react';

// Params
import { useParams } from 'react-router-dom';

import { HeaderNav } from "../../Component/Header/header-nav.component"

export const EditScreen = () => {

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
