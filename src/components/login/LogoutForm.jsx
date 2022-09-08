import React from 'react'



const LogoutForm = ({ isLogged, setIsLogged }) => {

    const handleClick = () => {
        setIsLogged()
        localStorage.removeItem('token')
    }

    const user = [localStorage.getItem('firtsName'), localStorage.getItem('lastName')]




    return (
        <article className='form-logout'>
            <i className="form-logout__icon fa-solid fa-user"></i>
            <h2>Welcome!</h2>
            <h2 className='form-logout__username'>
                {`${user[0]} ${user[1]}`}
            </h2>
            <h2></h2>
            <i className="form-logout__check fa-solid fa-square-check"></i>
            <button onClick={handleClick} className='login__btn'>Logout</button>
        </article>
    )
}

export default LogoutForm