import React, { useEffect, useState } from 'react'
import LogoutForm from '../login/LogoutForm'
import LoginForm from '../login/LoginForm'




const Login = () => {

  const [isLogged, setIsLogged] = useState()

  useEffect(() => {
    setIsLogged(localStorage.getItem('token'))
  }, [])



  return (
    <main className='login'>
      {
        isLogged ?
          <LogoutForm setIsLogged={setIsLogged} isLogged={isLogged} />
        :
          <LoginForm setIsLogged={setIsLogged} />
      }
    </main>
  )
}


export default Login