import React from 'react'
import Styles from './dashboardbtn.module.css'

function Blogbtn() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            <span className={Styles.actualtext}>&nbsp;Welcome To 3T Blog &nbsp;</span>
        </button>

    )
}

export default Blogbtn
