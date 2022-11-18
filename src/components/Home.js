import React from 'react'

import Comment from './Comment'
import { useGlobalContext } from '../context'

const Home = () => {
  const { comments } = useGlobalContext()

  const rootComments = Object.values(comments).filter(
    (comment) => comment.isRoot
  )

  return (
    <div className='App'>
      {rootComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}

export default Home
