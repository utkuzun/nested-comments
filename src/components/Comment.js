import React from 'react'

import AddComment from './AddComment'

const Comment = ({ comment }) => {
  const { author, date, childrenComments, likes, id } = comment

  return (
    <article className='comment-box'>
      <h4>{author}</h4>
      <p>{date}</p>
      <div>
        <p>{likes}</p>
      </div>
      {childrenComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
      <AddComment parentNodeId={id} isRoot={false} />
    </article>
  )
}

export default Comment
