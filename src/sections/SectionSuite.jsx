import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ref, push, set, getDatabase, onValue, off } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import Arrow from '../svgs/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg'
import Bounce from '../svgs/bounce.svg'
import Cut from '../svgs/cut.svg'
import specialEffects from '../images/special-effects.png'

import theme from '../theme'
import BlurBall from '../components/BlurBall'
import ButtonLink from '../components/ButtonLink'
import VoteButton from '../components/VoteButton'
import InputAndSubmit from '../components/InputAndSubmit'
import { StyledSection } from '../components/sections'
import { Heading2, Heading6, Body } from '../components/typography'

const CenterWideSection = styled(StyledSection)`
  flex-direction: column;

  padding-left: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
  padding-right: calc(calc(100% - ${theme.spacing.mainWidth}px) / 2);
`

const ToolsContainer = styled.div`
  margin-top: ${theme.spacing.rhythm * 2}px;

  display: flex;
  gap: ${theme.spacing.rhythm * 2}px;
`

const ToolContainer = styled.div`
  width: ${theme.spacing.card}px;
  background-color: ${theme.palette.background.dark(0.9)};
  border-radius: 16px;
  padding: ${theme.spacing.rhythm}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.palette.secondary.main()};
  margin: ${theme.spacing.rhythm}px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Description = styled(Body)`
  text-align: center;
  font-size: 14px;
  margin-bottom: ${theme.spacing.rhythm * 2}px;
`

const StyledArrow = styled(Arrow)`
  height: 16px;
  width: 16px;
  margin-right: -4px;
  padding-left: 4px;
`

const VerticalLine = styled.div`
  border-left: 1px dashed rgba(255, 255, 255, 0.2);
  margin: ${theme.spacing.rhythm * 2}px 0px;
`

const VFXIcon = styled.img`
  filter: invert(100%);
  height: 50px;
  width: 50px;
`

const QuestionMark = styled.div`
  font-size: 40px;
  color: white;
`

const auth = getAuth()
let uid
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid
  }
})

const SectionSuite = () => {
  const [votesData, setVotesData] = useState({})
  useEffect(() => {
    const db = getDatabase()
    const votesRef = ref(db, 'votes')

    onValue(votesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        setVotesData(data)
      } else {
        setVotesData({})
      }
    })

    return () => { off(votesRef) }
  }, [])

  const voteForIdea = (toolIdea) => {
    const db = getDatabase()
    set(
      ref(db, `votes/${uid}/${toolIdea}`),
      true
    )
  }

  const [ideaValue, setIdeaValue] = useState('')
  const [ideaSubmitted, setIdeaSubmitted] = useState(false)
  const submitToolIdea = (toolIdea) => {
    const db = getDatabase()
    const toolIdeasListRef = ref(db, 'toolIdeas')
    const newToolIdeaRef = push(toolIdeasListRef)
    set(newToolIdeaRef, toolIdea)
    setIdeaSubmitted(true)
  }

  return (
    <CenterWideSection id="tools">
      <BlurBall $top="150" $left="0" />

      <Heading2>
        The Wiggle Suite
      </Heading2>

      <ToolsContainer>
        <ToolContainer>
          <IconCircle>
            <Bounce style={{ width: '60%', height: '60%', marginTop: 3, marginLeft: 3 }} />
          </IconCircle>
          <Heading6>Wiggle Animate</Heading6>
          <Description>
            A vector-based motion graphics animation tool. Dozens of properties, keyframe control, and curve editors.
          </Description>
          <ButtonLink outlined $fullWidth linkTo="https://wiggle.tools/animate" newTab>
            Open Tool
            <StyledArrow />
          </ButtonLink>
        </ToolContainer>

        <VerticalLine />

        <ToolContainer>
          <IconCircle>
            <Cut style={{ width: '48%', height: '48%', marginTop: 6 }} />
          </IconCircle>
          <Heading6>Wiggle Edit</Heading6>
          <Description>
            A video editor so simple you'll never get lost. Cut, Layer, Export.<br /><br />
            <span style={{ color: 'grey' }}>Gauging Interest</span>
          </Description>
          <VoteButton
            onVote={() => voteForIdea('wiggle-edit')}
            voted={votesData[uid]?.['wiggle-edit']}
            total={Object.values(votesData).reduce((accum, voteObj) => {
              if ('wiggle-edit' in voteObj) {
                return accum + 1
              }
              return accum
            }, 0)}
          />
        </ToolContainer>

        <ToolContainer>
          <IconCircle>
            <VFXIcon src={specialEffects} alt="Visual Effects" />
          </IconCircle>
          <Heading6>Wiggle VFX</Heading6>
          <Description>
            Apply basic effects to real footage -- green screen, blur, recolor, and complex layering.<br />
            <span style={{ color: 'grey' }}>Gauging Interest</span>
          </Description>
          <VoteButton
            onVote={() => voteForIdea('wiggle-vfx')}
            voted={votesData[uid]?.['wiggle-vfx']}
            total={Object.values(votesData).reduce((accum, voteObj) => {
              if ('wiggle-vfx' in voteObj) {
                return accum + 1
              }
              return accum
            }, 0)}
          />
        </ToolContainer>

        <ToolContainer>
          <IconCircle>
            <QuestionMark>?</QuestionMark>
          </IconCircle>
          <Heading6>What Else?</Heading6>
          <Description>Know of a creative tool that lacks awesome or free alternatives?<br />Let us know.<br /><br /></Description>
          <InputAndSubmit
            value={ideaValue}
            onChange={(event) => setIdeaValue(event.target.value)}
            onSubmit={(value) => { submitToolIdea(value) }}
            submissionDone={ideaSubmitted}
          />
        </ToolContainer>
      </ToolsContainer>
    </CenterWideSection>
  )
}

export default SectionSuite
