import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emailChangedActionCreator, messageChangedActionCreator, nameChangedActionCreator, newFeedback } from './store/action'
import {Input, TextArea, Button} from './styles/Form'
function Form() {

  const dispatch = useDispatch()

  let feedback = useSelector(state => state.feedbacks.feedback);

  const post = () => {
    dispatch(newFeedback(feedback));
    console.log(feedback);
  }

  return (
    <div>
        <div>
        <Input value={feedback.name} onChange={(e) => dispatch(nameChangedActionCreator(e.target.value))} placeholder='Your name*'/>
        </div>
        <div>
        <Input value={feedback.email} onChange={(e) => dispatch(emailChangedActionCreator(e.target.value))} placeholder='Your email*'/>
        </div>
        <div>
            <TextArea value={feedback.message} onChange={(e) => dispatch(messageChangedActionCreator(e.target.value))} placeholder='Message*'/>
        </div>
        <div>
            <Button onClick={() => post()}>Send message</Button>
        </div>
    </div>
  )
}

export default Form