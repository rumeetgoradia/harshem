import styled, { css } from "styled-components"

import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"

const borderedStyle = css`
  cursor: pointer;
  margin: 0;
  border: 1px solid var(--primary);
  background-color: var(--primary);
  border-radius: 4px;
  color: var(--white);
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 12px 32px;
  padding-right: 30px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s linear, background-color 0.3s linear,
    transform 0.3s linear;
  &:hover,
  &:active {
    color: var(--primary);
    background-color: transparent;
    text-decoration: none;
  }
  &:active {
    transform: translateY(3px);
  }
  &.--clear {
    border-color: var(--white);
    color: var(--white);
    background-color: transparent;
    &:hover {
      color: var(--primary);
      background-color: var(--white);
    }
  }
`

export const BorderedScrollLink = styled(ScrollLink)`
  ${borderedStyle}
`

export const BorderedLink = styled(Link)`
  ${borderedStyle}
`

export const BorderedButton = styled.button`
  ${borderedStyle}
`
