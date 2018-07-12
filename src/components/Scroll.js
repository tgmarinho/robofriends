import React from 'react'
import './Scroll.css'

const Scroll = ({ children }) => {
    return (
        <div style={{ overflow: 'scroll', border: '0px', maxHeight: '100vh' }}>
            {children}
        </div>
    )
}

export default Scroll