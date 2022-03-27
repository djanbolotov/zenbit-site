import React from 'react'
import { useDispatch } from 'react-redux';
import { ERROR_NULL } from './store/action';
import {ErrorContainer, ErrorFlex, CancelButton } from './styles/Error';


function AlertError({error}) {
    const dispatch = useDispatch();
    console.log(error);
  return (
    <ErrorContainer>
        <ErrorFlex>
        <h2>Something went wrong!)</h2>
        <CancelButton onClick={() => dispatch({type: ERROR_NULL})}>	&#10008; </CancelButton>
        </ErrorFlex>
        <ul>
            {
                error.map((message) =>{
                    return <li> {message} </li>
                })
            }
        </ul>
    </ErrorContainer>
  )
}


export default AlertError