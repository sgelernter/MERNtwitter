import { combineReducers } from "redux";
import SessionErrorsReduer from './session_errors_reducer';

export default combineReducers({
    session: SessionErrorsReduer
});
