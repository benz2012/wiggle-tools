import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const StyledAnchor = styled.a`
  text-decoration: none;
`

const ButtonLink = ({ children, linkTo, ...rest }) => (
  <StyledAnchor href={linkTo}>
    <Button {...rest}>{children}</Button>
  </StyledAnchor>
)

export default ButtonLink
