import React from 'react'
import Styles from './dashboardbtn.module.css'
function Loginbtn() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            <span className={Styles.actualtext}>&nbsp;Welcome To login Page &nbsp;</span>
        </button>
    )
}

export default Loginbtn;
