import React from 'react'
import { useDispatch } from 'react-redux';
import { SUCCESS_FALSE } from './store/action';
import {AlertContainer, CancelButton} from './styles/Success';


function AlertSuccess() {
    const dispatch = useDispatch();

  return (
    <AlertContainer>
        <h2>Message saved successfully!</h2>
        <CancelButton onClick={() => dispatch({type: SUCCESS_FALSE})}>	&#10008; </CancelButton>
    </AlertContainer>
  )
}



export default AlertSuccess