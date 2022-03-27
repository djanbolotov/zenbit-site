import { POST, POST_SUCCESS, POST_ERROR, NAME_CHANGED, EMAIL_CHANGED, MESSAGE_CHANGED, SUCCESS_FALSE, ERROR_NULL } from "./action"

const initialState = {
    feedback: {
        name: '',
        email: '',
        message: '',
    },
    loading: false,
    error: null,
    success: false,
}

export const feedbackReducer = (state = initialState, action ) =>{
    switch (action.type){
        case POST:
            return {...state, loading: true, error: null, success: false}
        case POST_SUCCESS:
            return {...state, loading: false, error: null, success: true}
        case POST_ERROR:
            return {...state, loading: false, error: action.payload, success: false}
        case NAME_CHANGED:
            return {...state, loading: false, error: null, success: false, feedback: {...state.feedback, name: action.name}}
        case EMAIL_CHANGED:
            return {...state, loading: false, error: null, success: false, feedback: {...state.feedback, email: action.email}}
        case MESSAGE_CHANGED:
            return {...state, loading: false, error: null, success: false, feedback: {...state.feedback, message: action.message}}
        case SUCCESS_FALSE:
            return {...state, loading: false, error: null, success: false}
        case ERROR_NULL:
            return {...state, loading: false, error: null, success: false}
        default:
            return state;
    }
}

