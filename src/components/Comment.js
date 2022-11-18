import React from 'react'

const Comment = ({ comment }) => {
  const { author, date, childrenComments, likes } = comment

  console.log(childrenComments)

  return (
    <div>
      <h4>{author}</h4>
      <p>{date}</p>
      <div>
        <p>{likes}</p>
      </div>
      {childrenComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}

export default Comment
