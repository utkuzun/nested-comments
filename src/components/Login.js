import React, { useState } from 'react'

import { useGlobalContext } from '../context'

const Login = () => {
  const [username, setUsername] = useState('')
  const { setUser, setPage } = useGlobalContext()

  const onSubmit = () => {
    setUser(username)
    setPage('home')
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <button type='submit'>Login</button>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength='3'
          />
        </div>
      </form>
    </section>
  )
}

export default Login
