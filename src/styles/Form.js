import styledComponents from 'styled-components'

export const Input = styledComponents.input`
 height: 5rem;
 width: 25rem;
 border-radius: 0.5rem;
 margin: 0.4rem;
 padding: 0 2rem;
 border: 1px solid #DCDCDC;

 @media (max-width: 600px) {
      height: 4rem;
      width: 20rem;
  }

  @media (max-width: 600px) {
    height: 2rem;
    width: 12rem;
}
`

export const TextArea = styledComponents.textarea`
height: 8rem;
width: 25rem;
border-radius: 0.5rem;
margin: .4rem;
padding: 2rem;
border: 1px solid #DCDCDC;
@media (max-width: 600px) {
    height: 6rem;
    width: 20rem;
}

@media (max-width: 600px) {
    height: 4rem;
    width: 12rem;
}
`

export const Button = styledComponents.button`
padding: 1.2rem 2rem;
background: #FAD34F;
color: white;
border-top-left-radius:2rem;
border-top-right-radius:2rem;
border-bottom-right-radius:2rem;
border-bottom-left-radius:2rem;
border-width: 0;
margin: .4rem;

@media (max-width: 600px) {
    padding: 0.5rem 1rem;
}
`
