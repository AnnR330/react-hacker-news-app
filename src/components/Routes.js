import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Main from "./StoriesList"
import Story from "./StoryPage"
import { Title } from '../styles/styles'

const Routes = () => (
    <HashRouter>
        <Title> Hacker News </Title>
        <Route exact path="/" component={Main} />
        <Route exact path="/:storyId" component={Story} />
    </HashRouter> 
) 

export default Routes;