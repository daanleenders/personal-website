import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Daan Leenders</strong>, <br/>
                        Developer @ <a href="https://www.tracebuzz.com">Tracebuzz</a>,<br />
                        TV & movie lover, husband and father</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
