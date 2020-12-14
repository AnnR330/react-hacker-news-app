import axios from 'axios'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'
const JSON = '.json?print=pretty'

const client = axios.create({
    baseURL: BASE_URL,
})

const hackerNewsApi = {}

hackerNewsApi.getNewStories = () => 
    client.get(`/newstories${JSON}`)

hackerNewsApi.getStory = id => 
    client.get((`/item/${id}${JSON}`))    

export default hackerNewsApi

