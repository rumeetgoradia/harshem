import styled from "styled-components"

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 9997;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  transition: opacity 0.3s linear;
  @media screen and (min-width: 768px) {
    opacity: 0;
    pointer-events: none;
  }
`
export default Backdrop
