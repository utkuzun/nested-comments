import React, { useEffect } from 'react'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'

import { useGlobalContext } from './context'

function App() {
  const { page, setPage, user, setUser, setComments } = useGlobalContext()

  useEffect(() => {
    const isUser = window.localStorage.getItem('user')
    if (isUser) {
      setUser(isUser)
    }
  }, [])

  useEffect(() => {
    const isComments = JSON.parse(window.localStorage.getItem('comments'))
    if (isComments) {
      setComments(isComments)
    }
  }, [])

  return (
    <>
      <main>
        <nav>
          <div className='links'>
            <button onClick={() => setPage('login')}>Login</button>

            <button onClick={() => setPage('home')}>Home</button>
          </div>
          {user && <p>welcome {user}</p>}
        </nav>
        {page === 'home' && user ? <Home /> : <Login />}
      </main>
    </>
  )
}

export default App
