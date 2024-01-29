import styled, { keyframes } from 'styled-components';

const loading = keyframes`    
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  vertical-align: top;
  transition:
    0.3s color,
    0.3s border,
    0.3s transform,
    0.3s opacity;

  .loader {
    box-sizing: content-box;
    position: relative;
    width: 3em;
    height: 3em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
    border: 0.2em solid transparent;
    border-top-color: currentcolor;
    border-radius: 50%;
    animation: 1s ${loading} linear infinite;
    &:before {
      content: '';
      display: block;
      width: inherit;
      height: inherit;
      position: absolute;
      top: -0.2em;
      left: -0.2em;
      border: 0.2em solid currentcolor;
      border-radius: 50%;
      opacity: 0.5;
    }
  }
`;
export default function Loader() {
  return (
    <StyledLoader>
      <div className={'loader'} />
    </StyledLoader>
  );
}
