import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const AppContext = createContext()

let initComments = {
  //   1: {
  //     likes: '5',
  //     author: 'ahmet',
  //     date: '15/12/2025',
  //     isRoot: true,
  //     parentNodeId: '',
  //     context: 'awesome comment',
  //     childrenComments: [
  //       {
  //         likes: '5',
  //         author: 'kalim',
  //         date: '15/12/2025',
  //         isRoot: false,
  //         parentNodeId: '1',
  //         context: 'awesome comment',
  //         childrenComments: [],
  //         id: '2',
  //       },
  //     ],
  //     id: '1',
  //   },
  //   2: {
  //     likes: '5',
  //     author: 'kalim',
  //     date: '15/12/2025',
  //     isRoot: false,
  //     parentNodeId: '1',
  //     context: 'awesome comment',
  //     childrenComments: [],
  //     id: '2',
  //   },
  //   3: {
  //     likes: '5',
  //     author: 'mehmet',
  //     date: '15/12/2025',
  //     isRoot: true,
  //     parentNodeId: '',
  //     context: 'awesome comment',
  //     childrenComments: [],
  //     id: '3',
  //   },
}

const AppProvider = ({ children }) => {
  const [comments, setComments] = useState(initComments)
  const [user, setUser] = useState('utku')
  const [page, setPage] = useState('home')

  const craeteComment = ({ ...inputs }) => {
    const newComment = {
      ...inputs,
      id: uuidv4(),
      date: 'of date',
      author: user,
      likes: 0,
      childrenComments: [],
    }
    return newComment
  }

  const addComment = ({ ...inputs }) => {
    const { parentNodeId } = inputs
    const newComment = craeteComment({ ...inputs })

    if (!parentNodeId) {
      const newComments = {
        ...comments,
        [newComment.id]: newComment,
      }

      setComments(newComments)
      return
    }

    const newComments = {
      ...comments,
      [newComment.id]: newComment,
      [newComment.parentNodeId]: {
        ...comments[newComment.parentNodeId],
        childrenComments: [
          ...comments[newComment.parentNodeId].childrenComments,
          newComment,
        ],
      },
    }

    setComments(newComments)
    setPage('home')
  }

  return (
    <AppContext.Provider
      value={{
        comments,
        setComments,
        page,
        setPage,
        user,
        setUser,
        addComment,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
