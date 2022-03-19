import React from 'react'
export default function Header(props) {
    // console.warn('Home',props.data.length)
    return (
        <div style={{position: 'relative'}}>
            <h1>Header Component</h1>
            <div className="cart-icon">
                <i className="fas fa-shopping-cart"></i><i className="fa-solid cart-count">{props.data.length}</i>
            </div>
        </div>
    )
}
