import styledComponents from 'styled-components';


export const ErrorFlex = styledComponents.div`
display: flex;
justify-content: centre;
align-items: center;
`;


export const ErrorContainer = styledComponents.div`
color: red;
font-size: 2rem;
position: fixed;
top: 30%;
left: 10%;
width: 80%;
background: rgba(255, 76, 48, 0.8);
border-radius: 5rem;
padding: 1rem;
`;

export const CancelButton = styledComponents.div`
color: red;
content: 'fuck';
position: absolute;
right: 5%;
top: 1%;
cursor: pointer;
`;