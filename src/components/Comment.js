import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchComment } from '../actions/actions'
import CommentsList from './CommentsList'

import { CommentItem, CommentTitle, CommentText, CommentFooter, NestedButton} from '../styles/styles'

const Comment = ({ fetchComment, commentId, commentIndex, comments }) => {

  useEffect(() => {
    fetchComment(commentId, commentIndex)
  }, [fetchComment, commentId, commentIndex])

  const [nestedComments, setNestedComments] = useState(null)

  const getNestedComments = () => {
    const nested = <CommentsList commentData = {comments[commentIndex]?.kids}/>
    setNestedComments(nested)
  }
  return (
    <CommentItem onClick={getNestedComments} key={commentId}>
      <CommentTitle>
        Comment's by {comments[commentIndex]?.by}
      </CommentTitle>
      <CommentText  dangerouslySetInnerHTML={{ __html: comments[commentIndex]?.text }} />
      
      {comments[commentIndex]?.kids && (
        <CommentFooter>
            Nested comments: {comments[commentIndex].kids.length}
          </CommentFooter>
      )}
      {comments[commentIndex]?.kids 
      ? (<NestedButton
            onClick={getNestedComments}
            disabled={!comments[commentIndex]?.kids}
          >
            Nested Comments
          </NestedButton>
      ) : (
          null
      )
      }
      {nestedComments}
    </CommentItem>
  );
};
const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComment })(Comment)