import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'



const LoginForm = ({ setIsLogged }) => {

    


    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data.user)
                localStorage.setItem('firtsName', res.data.data.user.firstName)
                localStorage.setItem('lastName', res.data.data.user.lastName)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(res.data.data.user)
            })
            .catch(err => console.log(err))
        reset({
            email: '',
            password: ''
        })
    }

    




    return (
        <form onSubmit={handleSubmit(submit)} className='login__form'>
            <h2 className='login__tittle'>Welcome! <br /> Enter Info</h2>
            <div className='login__div'>
                <label className='login__label' htmlFor="email">Email</label><br />
                <input
                    {...register('email')}
                    className='login__input'
                    type="email"
                    id="email"
                />
            </div>
            <div className='login__div'>
                <label className='login__label' htmlFor="password">Password</label><br />
                <input
                    {...register('password')}
                    className='login__input'
                    type="password"
                    id="password"
                />
            </div>
            <button className='login__btn'>Login</button>
        </form>
    )
}

export default LoginForm