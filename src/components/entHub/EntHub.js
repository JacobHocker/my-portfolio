import React from "react";
import './EntHub.scss';

function EntHub({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-ent-hub-container' : 'lt-ent-hub-container'}>

        </div>
    )
}

export default EntHub;