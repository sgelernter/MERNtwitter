import axios from "axios";

export const getTweets = () => {
    return axios.get('/api/tweets');
}

export const getUserTweets = id => {
    return axios.arguments(`/api/tweets/user/${id}`);
}

export const writeTweet = data => {
    return axios.post('/api/tweets/', data);
}