import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const StyledAnchor = styled.a`
  text-decoration: none;
  display: inline-block;
  width: ${props => props.$fullWidth ? '100%' : 'unset'};
`

const ButtonLink = ({ children, linkTo, linkStyle, newTab = false, ...rest }) => {
  const tabProps = newTab ? {
    target: '_blank',
    rel: 'noreferrer noopener',
  } : {}
  return (
    <StyledAnchor href={linkTo} $fullWidth={rest.$fullWidth} style={linkStyle} {...tabProps}>
      <Button noTabIndex {...rest}>{children}</Button>
    </StyledAnchor>
  )
}

export default ButtonLink
