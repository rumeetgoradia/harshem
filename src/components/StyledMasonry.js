import Masonry from "react-masonry-css"
import styled from "styled-components"

export const MasonryInfo = {
  breakpoints: {
    default: 3,
    767: 2,
  },
  className: "masonry",
  columnClassName: "masonry-col",
}

export const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -16px;
  width: auto;
  .masonry-col {
    padding-left: 16px;
    background-clip: padding-box;
  }
`

export const StyledMasonryBox = styled.div`
  border-radius: 0.25rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(17, 17, 17, 0.4);
  color: var(--black);
  transition: border-color 0.3s linear, color 0.3s linear;
  h1 {
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }
  h2 {
    font-size: 14px;
    opacity: 0.7;
    font-weight: 400;
    margin-top: 0.75rem;
    margin-bottom: 0;
  }
  h3 {
    font-size: 10px;
    margin-top: 0.5rem;
    font-weight: 300;
    margin-bottom: 0;
    opacity: 0.5;
  }
  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`
