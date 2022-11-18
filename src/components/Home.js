import React from 'react'

import Comment from './Comment'
import { useGlobalContext } from '../context'
import AddComment from './AddComment'

const Home = () => {
  const { comments } = useGlobalContext()

  const rootComments = Object.values(comments).filter(
    (comment) => comment.isRoot
  )

  console.log(rootComments.length)

  return (
    <div className='App'>
      {rootComments.length > 0 ? (
        rootComments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
        })
      ) : (
        <p>there is no comment yet..</p>
      )}
      <AddComment parentNodeId={''} isRoot={true} />
    </div>
  )
}

export default Home
