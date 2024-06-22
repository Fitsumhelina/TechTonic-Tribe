import React from 'react'
import Styles from './techtonichome.module.css'
function Techtonichome() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            <span className={Styles.actualtext}>&nbsp;TechTonic&nbsp;</span>
            <span aria-hidden="true" className={Styles.hovertext}>&nbsp;TechTonic&nbsp;</span>
        </button>
    )
}

export default Techtonichome
