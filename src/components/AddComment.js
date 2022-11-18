import React, { useState } from 'react'

import { useGlobalContext } from '../context'

const AddComment = ({ parentNodeId, isRoot }) => {
  const [text, setText] = useState('')

  const { addComment, user } = useGlobalContext()

  const onSubmit = (e) => {
    e.preventDefault()
    addComment({ context: text, parentNodeId, isRoot, author: user })
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='comment'
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button type='submit'>Add Comment</button>
    </form>
  )
}

export default AddComment
