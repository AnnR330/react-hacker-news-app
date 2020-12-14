import { combineReducers } from 'redux'
import { actionTypes } from '../constants/constants'

const fetchStoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_STORIES:
      return payload
    default:
      return state
  }
}

const fetchStoryReducer = (state = [], { type, payload, storyIndex }) => {
  switch (type) {
    case actionTypes.FETCH_STORY:
      const story = [...state]
      story[storyIndex] = payload
      return story
    default:
      return state
  }
}

const fetchCommentReducer = (state = [], { type, payload, commentIndex}) => {
  switch (type) {
    case actionTypes.FETCH_COMMENT:
      const comments = [...state]
      comments[commentIndex] = payload
      return comments
    default:
      return state
  }
} 

export default combineReducers({
  storiesList: fetchStoriesReducer,
  stories: fetchStoryReducer,
  comments: fetchCommentReducer,
})
