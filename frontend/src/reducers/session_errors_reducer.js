import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
        default: 
            return state;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
    }
};

export default SessionErrorsReducer;