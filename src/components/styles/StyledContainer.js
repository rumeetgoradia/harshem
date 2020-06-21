import { Container } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export const StyledContainer = styled(Container)`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--base);
  &.--secondary {
    background-color: var(--base3);
  }
`

export const StyledHeader = styled.h1`
  color: var(--primary);
  letter-spacing: 1px;
  font-weight: 600;
  margin: 0 0 0.75rem;
  font-size: 2.25rem;
  line-height: 1;
`

export const StyledHr = styled.hr`
  width: 5%;
  min-width: 40px;
  border: 3px solid var(--primary);
  margin: 0 0 2rem;
`

export const StyledParagraph = styled.p`
  color: var(--black);
  font-weight: 300;
  line-height: 1.15;
  margin: 0 0 1rem;
  font-size: 1.25rem;
`

export function InfoContainer({
  children,
  className,
  parentClassName,
  secondary,
  header,
}) {
  return (
    <StyledContainer
      fluid
      className={`${parentClassName} ${secondary ? "--secondary" : ""}`}
    >
      <Container className={`${parentClassName}__${className}`}>
        <StyledHeader className={`${parentClassName}__${className}__header`}>
          {header}
        </StyledHeader>
        <StyledHr className={`${parentClassName}__${className}__hr`} />
        {children}
      </Container>
    </StyledContainer>
  )
}

InfoContainer.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  parentClassName: PropTypes.string,
  secondary: PropTypes.bool,
  header: PropTypes.string,
}

InfoContainer.defaultProps = {
  className: "info-container",
  parentClassName: "info-wrapper",
}
