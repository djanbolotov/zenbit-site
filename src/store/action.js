export const POST = 'POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';

export const NAME_CHANGED = 'NAME_CHANGED';
export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const MESSAGE_CHANGED = 'MESSAGE_CHANGED';

export const SUCCESS_FALSE = 'SUCCESS_FALSE';
export const ERROR_NULL = 'ERROR_NULL';

export const newFeedback = (data) => {
    return async (dispatch) => {
        dispatch({type: POST})
        const response = await fetch("https://zenbit-api-production.up.railway.app/api/feedbacks/create", 
          {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
          })
        const json = await response.json();
        if(!Array.isArray(json.message)){
          dispatch({type: POST_SUCCESS})
        }else{
          dispatch({type: POST_ERROR, payload: json.message});
        }
    }
}

export const nameChangedActionCreator = (name) => {
  return {
    type: NAME_CHANGED,
    name
  }
}

export const emailChangedActionCreator = (email) => {
  return {
    type: EMAIL_CHANGED,
    email
  }
}

export const messageChangedActionCreator = (message) => {
  return {
    type: MESSAGE_CHANGED,
    message
  }
}
