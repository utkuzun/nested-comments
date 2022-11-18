import React from 'react'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'

import { useGlobalContext } from './context'

function App() {
  const { page, setPage, user } = useGlobalContext()

  return (
    <>
      <div>
        <nav>
          <div className='links'>
            <button onClick={() => setPage('login')}>Login</button>

            <button onClick={() => setPage('home')}>Home</button>
          </div>
          {user && <p>welcome {user}</p>}
        </nav>
        {page === 'login' ? <Login /> : <Home />}
      </div>
    </>
  )
}

export default App
