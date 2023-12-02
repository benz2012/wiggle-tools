import React from 'react'
import styled from 'styled-components'

import SendIt from '../svgs/send_FILL0_wght400_GRAD0_opsz24.svg'

import theme from '../theme'
import Button from './Button'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

const InputBox = styled.input`
  flex: 1;
  width: 0px;
  padding: ${theme.spacing.rhythm}px ${theme.spacing.rhythm}px;

  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid grey;
  border-radius: 8px 0px 0px 8px;
  font-size: 14px;
  color: white;
`

const SendItIcon = styled(SendIt)`
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
`

const InputAndSubmit = ({ value, onChange }) => {
  return (
    <Container>
      <InputBox value={value} onChange={onChange} placeholder="Tool Idea" />
      <Button
        color="grey"
        outlined
        style={{
          padding: theme.spacing.rhythm,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeft: 'none',
          height: '42px',
        }}
      >
        <SendItIcon />
      </Button>
    </Container>
  )
}

export default InputAndSubmit
