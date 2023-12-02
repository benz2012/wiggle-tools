import React from 'react'
import styled from 'styled-components'

import SendIt from '../svgs/send_FILL0_wght400_GRAD0_opsz24.svg'
import CheckMark from '../svgs/done_FILL0_wght400_GRAD0_opsz24.svg'

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

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const FakeInput = styled.div`
  flex: 1;
  padding: ${theme.spacing.rhythm}px ${theme.spacing.rhythm}px;

  border: 1px solid grey;
  border-radius: 8px 0px 0px 8px;
  font-size: 14px;
  line-height: 16px;
  color: white;
`

const SendItIcon = styled(SendIt)`
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
`

const CheckMarkIcon = styled(CheckMark)`
  width: 16px;
  height: 18px;
`

const InputAndSubmit = ({ value, onChange, onSubmit, submissionDone }) => {
  return (
    <Container>
      {submissionDone ? (
        <FakeInput>Thanks!</FakeInput>
      ) : (
        <InputBox value={value} onChange={onChange} placeholder="Tool Idea" />
      )}
      <Button
        onClick={() => {
          if (!submissionDone) {
            onSubmit(value)
          }
        }}
        color="grey"
        outlined
        disabled={submissionDone}
        style={{
          padding: theme.spacing.rhythm,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeft: 'none',
          height: '42px',
        }}
      >
        {submissionDone ? <CheckMarkIcon /> : <SendItIcon />}
      </Button>
    </Container>
  )
}

export default InputAndSubmit
