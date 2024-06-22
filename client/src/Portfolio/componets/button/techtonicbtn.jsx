import React from 'react'
import Styles from './button.module.css'
function Techtonicbtn() {
    return (
        <button className={Styles.textbtn} data-text="Awesome">
            <span className={Styles.actualtext}>&nbsp;TechTonic&nbsp;</span>
            <span aria-hidden="true" className={Styles.hovertext}>&nbsp;TechTonic&nbsp;</span>
        </button>
    )
}

export default Techtonicbtn
