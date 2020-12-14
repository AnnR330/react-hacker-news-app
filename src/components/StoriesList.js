import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStories } from '../actions/actions'
import Story from './Story'
import { ListContainer, Button} from '../styles/styles'
import { UPDATE } from '../constants/constants'

const StoriesList = ({ fetchStories, storiesList }) => {

    useEffect( () => {
        fetchStories()
        let intervalId = setInterval(() => {
            fetchStories()
        }, UPDATE)
    
        return () => {
            clearInterval(intervalId);
        }
    }, [fetchStories])
        
    return (
        <ListContainer>
            <Button onClick = { () => fetchStories()}>
                Upload
            </Button> 
            {storiesList.map( (storyId, storyIndex ) => (
                <Story 
                    key = {storyId} 
                    storyId = {storyId}
                    storyIndex = {storyIndex}/>
            ))}
        </ListContainer>
    )
}

const mapStateToProps = (state) => {
    return { storiesList: state.storiesList};
  };
  
  export default connect(mapStateToProps, { fetchStories })(StoriesList);
  