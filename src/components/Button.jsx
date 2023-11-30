import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const ButtonContainer = styled.button`
  background-color: ${props => theme.palette[props.color || 'secondary'].main()};

  padding: ${theme.spacing.rhythm}px ${theme.spacing.rhythm * 2}px;
  border-radius: 8px;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.disabled ? theme.palette.disabled.text() : 'white'};
  font-size: 14px;

  &:hover {
    background-color: ${props => theme.palette[props.color || 'secondary'].main(
      props.disabled ? 1 : 0.8
    )};
  }
`

const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <ButtonContainer
      onClick={disabled ? (() => null) : onClick}
      color={disabled ? 'disabled' : rest.color}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
