import React from "react"
import DateTimePicker from "react-datetime-picker"
import styled, { css } from "styled-components"
import "./styles/Inputs.scss"

const inputCss = css`
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  width: 100%;
  background-color: whitesmoke;
  color: var(--black);
  &:focus {
    outline: none;
    background-color: var(--white);
    box-shadow: 1px 1px 3px rgba(17, 17, 17, 0.4);
  }
`

export const StyledTextInput = styled.input`
  ${inputCss}
`

export const StyledTextArea = styled.textarea`
  ${inputCss}
  margin-bottom: 0 !important;
`

export const StyledSelect = styled.select`
  ${inputCss}
  option {
    font-weight: 300;
    &:first-child {
      font-style: italic;
    }
  }
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: var(--black);
  letter-spacing: 1px;
  text-transform: uppercase;
  &.option {
    font-size: 14px;
    letter-spacing: 0;
    text-transform: none;
  }
`

export const ErrorText = styled.div`
  color: #bb0000;
  font-weight: 500;
  font-size: 0.75rem;
  margin-left: 5px;
  position: absolute;
`

export const LabeledTextInput = ({ label, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <StyledTextInput type="text" {...props} />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}

export const LabeledTextArea = ({ label, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <StyledTextArea type="text" {...props} />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}

export const LabeledSelect = ({ label, options, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <StyledSelect {...props}>
        {options.map((option, index) => (
          <option value={option.value} key={`${label}-select-option-${index}`}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}

const SelectorContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 0.25rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
      background-color: var(--primary);
      &:after {
        display: block;
      }
    }
  }
  &:hover input {
    & ~ .checkmark {
      background-color: #ccc;
    }
    &:checked ~ .checkmark {
      box-shadow: 0 0 0 4px rgba(95, 18, 37, 0.45);
      background-color: var(--primary);
    }
  }
`

const checkmarkCss = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: whitesmoke;
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
  }
`

const RadioCheckMark = styled.span`
  ${checkmarkCss}
  border-radius: 50%;
  &:after {
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--white);
  }
`

const CheckBoxCheckMark = styled.span`
  ${checkmarkCss}
  &:after {
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--white);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

export const LabeledRadioButton = ({ label, ...props }) => {
  return (
    <SelectorContainer>
      <Label className="option">{label}</Label>
      <input {...props} type="radio" />
      <RadioCheckMark className="checkmark"></RadioCheckMark>
    </SelectorContainer>
  )
}

export const LabeledCheckBox = ({ label, ...props }) => {
  return (
    <SelectorContainer>
      <Label className="option">{label}</Label>
      <input {...props} type="checkbox" />
      <CheckBoxCheckMark className="checkmark" />
    </SelectorContainer>
  )
}

export const StyledDateTimePicker = styled(DateTimePicker)`
  ${inputCss}
  &.styled-dt-picker {
    &.react-datetime-picker--disabled {
      opacity: 0.8;
    }
    .react-datetime-picker {
      &__wrapper {
        border: none;
      }
      &__inputGroup__divider {
        padding: 1px 3px;
        @media screen and (min-width: 1200px) {
          padding: 1px 0;
        }
      }
      &__button {
        &:hover,
        &:focus {
          svg {
            stroke: var(--secondary);
          }
        }
      }
    }
  }
`

export const LabeledDateTimePicker = ({ label, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <br />
      <StyledDateTimePicker
        {...props}
        className="styled-dt-picker"
        amPmAriaLabel="Select AM/PM"
        calendarAriaLabel="Toggle Calendar"
        dayAriaLabel="Day"
        dayPlaceholder="DD"
        hourAriaLabel="Hour"
        hourPlaceholder="hh"
        minuteAriaLabel="Minute"
        minutePlaceholder="mm"
        monthAriaLabel="Month"
        monthPlaceholder="MM"
        yearAriaLabel="Year"
        yearPlaceholder="YYYY"
        minDate={new Date()}
      />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}
