import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

let initComments = {
  comm1: {
    likes: '5',
    author: 'ahmet',
    date: '15/12/2025',
    isRoot: true,
    parentNodeId: '',
    context: 'awesome comment',
    childrenComments: [
      {
        likes: '5',
        author: 'kalim',
        date: '15/12/2025',
        isRoot: false,
        parentNodeId: '1',
        context: 'awesome comment',
        childrenComments: [],
        id: '2',
      },
    ],
    id: '1',
  },
  comm2: {
    likes: '5',
    author: 'kalim',
    date: '15/12/2025',
    isRoot: false,
    parentNodeId: '1',
    context: 'awesome comment',
    childrenComments: [],
    id: '2',
  },
  comm3: {
    likes: '5',
    author: 'mehmet',
    date: '15/12/2025',
    isRoot: true,
    parentNodeId: '',
    context: 'awesome comment',
    childrenComments: [],
    id: '3',
  },
}

const AppProvider = ({ children }) => {
  const [comments, setComments] = useState(initComments)
  const [user, setUser] = useState('')
  const [page, setPage] = useState('login')

  return (
    <AppContext.Provider
      value={{ comments, setComments, page, setPage, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
