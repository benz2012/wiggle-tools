import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const ButtonDefault = styled.button`
  background-color: ${props => theme.palette[props.color || 'secondary'].main()};

  width: ${props => props.fullWidth ? '100%' : 'unset'};
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

const ButtonOutlined = styled(ButtonDefault)`
  background-color: transparent;
  border: 1px solid ${props => theme.palette[props.color || 'secondary'].main()};
  color: ${props => theme.palette[props.color || 'secondary'].main()};

  &:hover {
    background-color: ${props => theme.palette[props.color || 'secondary'].main(0.2)};
  }
`

const Button = ({ children, onClick, disabled, outlined, ...rest }) => {
  let ButtonComponent = ButtonDefault
  if (outlined) {
    ButtonComponent = ButtonOutlined
  }
  return (
    <ButtonComponent
      onClick={disabled ? (() => null) : onClick}
      color={disabled ? 'disabled' : rest.color}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button
