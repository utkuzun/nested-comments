import React, { useState } from 'react'

import moment from 'moment/moment'

import AddComment from './AddComment'
import { useGlobalContext } from '../context'

const Comment = ({ comment }) => {
  const [show, setShow] = useState(false)
  const { author, date, childrenComments, likes, id, context } = comment

  const { upvoteComment } = useGlobalContext()
  const upvote = () => {
    upvoteComment({ id })
  }

  return (
    <article className='comment-box'>
      <h4>{author}</h4>
      <p>{context}</p>
      <div className='score'>
        <p>{likes}</p>
        <button onClick={upvote}>vote</button>
        <p>{moment(date).fromNow()}</p>
        <p>{childrenComments.length} replies</p>
        {childrenComments.length > 0 && (
          <p className='show-reply' onClick={() => setShow(!show)}>
            show replies
          </p>
        )}
      </div>
      <AddComment parentNodeId={id} isRoot={false} />
      {show &&
        childrenComments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />
        })}
    </article>
  )
}

export default Comment
