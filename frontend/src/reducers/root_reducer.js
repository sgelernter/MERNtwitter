import { combineReducers } from "redux";
import session from './session_reducer';
import ErrorsReducer from "./errors_reducer";
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
    session,
    tweets: TweetsReducer,
    errors: ErrorsReducer
});

export default RootReducer;