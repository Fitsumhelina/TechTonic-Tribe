import React from 'react'
import Styles from './dashboardbtn.module.css'
function Chatpagebtn() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            <span className={Styles.actualtext}>&nbsp;Welcome To Your chat &nbsp;</span>
        </button>
    )
}

export default Chatpagebtn;
