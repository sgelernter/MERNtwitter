import { RECEIVE_NEW_TWEET, RECEIVE_TWEETS, RECEIVE_USER_TWEETS } from "../actions/tweet_actions";

const TweetsReducer = (state = {all: {}, user: {}, new: undefined}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        default:
            return state;
        case RECEIVE_USER_TWEETS:
            newState.user = action.tweets.data;
            return newState;
        case RECEIVE_TWEETS:
            newState.all = action.tweets.data;
            return newState;
        case RECEIVE_NEW_TWEET:
            newState.new = action.tweet.data;
            return newState;
    }
}

export default TweetsReducer;