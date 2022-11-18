import React from 'react'

import Comment from './Comment'
import { useGlobalContext } from '../context'
import AddComment from './AddComment'

const Home = () => {
  const { comments, commentMapper } = useGlobalContext()

  const rootComments = Object.values(comments)
    .filter((comment) => comment.isRoot)
    .map(commentMapper)

  return (
    <div className='App'>
      <AddComment parentNodeId={''} isRoot={true} />
      {rootComments.length > 0 ? (
        rootComments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
        })
      ) : (
        <p>there is no comment yet..</p>
      )}
    </div>
  )
}

export default Home
