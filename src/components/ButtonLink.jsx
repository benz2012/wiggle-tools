import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const StyledAnchor = styled.a`
  text-decoration: none;
`

const ButtonLink = ({ children, linkTo, newTab = false, ...rest }) => {
  const tabProps = newTab ? {
    target: '_blank',
    rel: 'noreferrer noopener',
  } : {}
  return (
    <StyledAnchor href={linkTo} {...tabProps}>
      <Button {...rest}>{children}</Button>
    </StyledAnchor>
  )
}

export default ButtonLink
