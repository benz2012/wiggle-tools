import React from 'react'
import styled from 'styled-components'

import ThumbsUp from '../svgs/thumb_up_FILL0_wght400_GRAD0_opsz24.svg'

import theme from '../theme'
import Button from './Button'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.rhythm}px;
`

const TotalBox = styled.div`
  flex: 1;
  padding: ${theme.spacing.rhythm}px ${theme.spacing.rhythm * 2}px;

  font-size: 14px;
  color: grey;
  border: 1px solid grey;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ThumbsUpIcon = styled(ThumbsUp)`
  width: 16px;
  height: 16px;
`

const VoteButton = ({ total, voted = false }) => {
  return (
    <Container>
      <TotalBox>{total} want this</TotalBox>
      <Button outlined color="primary" style={{ padding: theme.spacing.rhythm }}>
        {voted ? ('voted') : (<ThumbsUpIcon />)}
      </Button>
    </Container>
  )
}

export default VoteButton
