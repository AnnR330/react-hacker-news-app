import React from 'react'

import Comment from './Comment'

const CommentsList = ({ commentData }) => {
  return (
    <ul>
      {commentData.map( (id, index) => (
        <Comment  
            key = {id}
            commentId = {id}
            commentIndex={index} />
      ))}
    </ul>
  )
}

export default CommentsList