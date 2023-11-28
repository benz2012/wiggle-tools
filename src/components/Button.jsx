import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const ButtonContainer = styled.button`
  background-color: ${theme.palette.secondary.main()};
  padding: ${theme.spacing.rhythm}px ${theme.spacing.rhythm * 2}px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 14px;

  &:hover {
    background-color: ${theme.palette.secondary.main(0.8)};
  }
`

const Button = ({ children, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
