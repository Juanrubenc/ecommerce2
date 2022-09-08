import React from 'react'
import { NavLink } from 'react-router-dom'


const Headers = () => {
    return (
        <header className='header'>
            <NavLink  to='/'>
                <a href="/" target="_blank">
                    <h1 className='page-tittle'>Zap-Store <i class="fa-solid fa-bolt"></i></h1>
                </a>
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/login'><i class="fa-solid fa-right-to-bracket"></i></NavLink></li>
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/purchases'><i class="fa-solid fa-bag-shopping"></i></NavLink></li>
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Headers