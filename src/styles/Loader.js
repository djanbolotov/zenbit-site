import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const Loading = styled.p`
  color: rgba(250, 211, 79, 1);
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
}
`;

export const DotWrapper = styled.div`
  position: fixed;
  left: 40%;
  top: 30%;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    left: 20%;
}
`;
export const Dot = styled.div`
  background-color: rgba(250, 211, 79, 1);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;