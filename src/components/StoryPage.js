import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import CommentsList from './CommentsList'
import { ItemContainer, ItemTitle, Description, DescriptionRow, DescriptionTitle, Button, ButtonsContainer} from '../styles/styles'
import { UPDATE } from '../constants/constants'

const StoryPage = ({ match: { params: { storyId } }, story}) => {

  const [comments, updateComments] = useState([])
  useEffect(() => {
    let intervalId = setInterval(() => {
      updateComments()
    }, UPDATE);
    return () => {
      clearInterval(intervalId);
    };
  }, [comments]);

  const StoryPage = () => {
    return (
      <div>
        <ButtonsContainer>
          <Link to={"/"} onClick={() => window.scrollTo(0, 0) }>
            <Button> Go back </Button>
          </Link>
          <Button onClick = {() => updateComments(comments)}> Upload </Button>
        </ButtonsContainer>

        <ItemContainer>
          <ItemTitle> {story?.title} </ItemTitle>

          <Description>
            <DescriptionRow>
              <DescriptionTitle> Url: </DescriptionTitle>
              {(story?.url)
                ? <a href={`${story?.url} `}>{story?.url}</a>
                : <i>Url not found</i>
              }
            </DescriptionRow>

            <DescriptionRow>
              <DescriptionTitle> By: </DescriptionTitle>
              {story?.by}
            </DescriptionRow>

            <DescriptionRow>
              <DescriptionTitle> Date: </DescriptionTitle>
              {new Date(1000 * story?.time).toLocaleString()}
            </DescriptionRow>
            <DescriptionRow>
              <DescriptionTitle> Comments: </DescriptionTitle>
              {story?.descendants}
            </DescriptionRow>
          </Description>

          <ItemTitle> Comments </ItemTitle>
          {(story?.kids)
            ? <CommentsList commentData = {story?.kids} /> 
            : <p><i>No comments</i></p>
          }
        </ItemContainer>
      </div>
    )
  }

  return <Route path={"/" + storyId} exact component={StoryPage} />
}

const mapStateToProps = (state, ownProps) => {
  return { story: state.stories[ownProps.match.params.storyId] }
}

export default connect(mapStateToProps, {})(StoryPage)
