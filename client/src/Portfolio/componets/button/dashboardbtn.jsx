import React from 'react'
import Styles from './dashboardbtn.module.css'
function Dashboardbtn() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            
            <span className={Styles.actualtext}>&nbsp;Welcome To Dashbord &nbsp;</span>
        </button>
    )
}

export default Dashboardbtn;
