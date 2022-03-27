import styledComponents from 'styled-components'


export const AlertContainer = styledComponents.div`
color: green;
font-size: 2rem;
position: fixed;
top: 30%;
left: 10%;
width: 80%;
height: 10rem;
background: rgba(70, 235, 176, 0.8);
border-radius: 5rem;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 600px) {
    font-size: 0.8rem;
    left: 5%;
}
`;

export const CancelButton = styledComponents.div`
color: green;
content: 'fuck';
position: absolute;
right: 5%;
top: 1%;
cursor: pointer;
`;