import React from 'react'
import logo from '../assests/images/NS-logo.png'

function HeaderTwo() {
    return (
        <div>
            <header className="header">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Todoist"></img>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderTwo
