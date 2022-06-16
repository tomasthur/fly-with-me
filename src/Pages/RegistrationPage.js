import React from 'react'
import RegisterForm from '../Layouts/RegisterForm'

const RegistrationPage = ({user, setUser}) => {

  return (
    <div className='container'>
      <header>
        <h1>Fly with me</h1>
      </header>
      <RegisterForm user={user} setUser={setUser}/>
    </div>
  )
}

export default RegistrationPage