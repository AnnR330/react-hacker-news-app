import hackerNewsApi from '../api/hackerNewsApi'
import { actionTypes, LIMIT } from '../constants/constants'


export const fetchStories = () => 
  async dispatch => {
    const res = await hackerNewsApi.getNewStories()
    const stories = res.data.slice(0, LIMIT)
    dispatch({
      type: actionTypes.FETCH_STORIES, 
      payload: stories,
    })
  }

export const fetchStory = (storyId, storyIndex) => 
  async dispatch => {
    const story = await hackerNewsApi.getStory(storyId)
    dispatch({
      type: actionTypes.FETCH_STORY,
      payload: story.data,
      storyIndex,
    })
  }

  export const fetchComment = (storyId, commentIndex) => 
  async dispatch => {
    const story = await hackerNewsApi.getStory(storyId)
    dispatch({
      type: actionTypes.FETCH_COMMENT,
      payload: story.data,
      commentIndex
    });
  };