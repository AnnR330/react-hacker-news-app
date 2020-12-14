import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchStory } from '../actions/actions'
import { Link } from 'react-router-dom'
import { Item, LinkTitle, Description, DescriptionRow, DescriptionTitle } from '../styles/styles';

const Story = ({ fetchStory, storyId, storyIndex, stories}) => {

  useEffect(() => {
    fetchStory(storyId, storyIndex)
  }, [fetchStory, storyId, storyIndex])

  return (
    <Item key={storyId}>
      {stories[storyIndex] && (
        <div>
          <Link
            to={`/${storyIndex}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <LinkTitle> {stories[storyIndex]?.title}</LinkTitle>
          </Link> 

          <Description>
            <DescriptionRow>
              <DescriptionTitle> By: </DescriptionTitle>
              {stories[storyIndex]?.by}
            </DescriptionRow>

            <DescriptionRow>
              <DescriptionTitle> Score: </DescriptionTitle>
              {stories[storyIndex]?.score}
            </DescriptionRow>

            <DescriptionRow>
              <DescriptionTitle> Date: </DescriptionTitle>
              {new Date(stories[storyIndex]?.time * 1000).toLocaleString()}
            </DescriptionRow>
          </Description>   
         </div>
      )}
    </Item>
  )
}

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps, { fetchStory })(Story)
