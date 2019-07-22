import React from 'react';
import styled from 'styled-components';

interface IRadio {
  checked?: boolean,
  name?: string,
  value?: string,
  disabled?: boolean,
  onRadioChange?: (e: any) => void
}

const COLOR_GREEN = '#35AA67';
const COLOR_GREY = '#999999';

const Input = styled.input.attrs({
  type: 'radio'
})`
  position: absolute;
  opacity: 0;
`;

const Container = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  margin: 5px;
`;

const Checkmark = styled.span`
  display: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${COLOR_GREEN};

  ${Input}:checked ~ & {
    display: block;
  }
`;

// @ts-ignore
const Wrapper = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  cursor: pointer;
  
  ${Input}:disabled ~ &:hover {
    cursor: default;
    background-color: transparent!important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid ${COLOR_GREY};
    border-radius: 50%;
    box-sizing: border-box;
  }
  
  ${Input}:checked ~ &:before {
    border-color: ${COLOR_GREEN};
  }

  ${Input}:checked ~ &:hover {
    background-color: rgba(240, 76, 58, 0.12);
  }
  
  ${Input}:checked ~ &:focus,
  ${Input}:checked ~ &:active {
    background-color: rgba(240, 76, 58, 0.16);
  }
  
  &:hover {
    background-color: rgba(111, 111, 111, 0.12);
  }
  
  &:focus,
  &:active {
    background-color: rgba(240, 76, 58, 0.16);
  }
  
`;



export const Radio = ({
  name,
  checked,
  disabled,
  value,
  onRadioChange
}:IRadio): JSX.Element => {
  return (
    <Container>
      <Input
        name={name}
        checked={checked}
        value={value}
        onChange={onRadioChange}
        disabled={disabled}
      />
      <Wrapper />
      <Checkmark />
    </Container>
  )
};
