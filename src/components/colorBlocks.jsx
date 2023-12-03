import styled from 'styled-components'

import theme from '../theme'

export const Block1 = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${theme.palette.primary.main()};
  position: absolute;
  top: -50px;
  left: 0px;
  border-bottom-left-radius: 100px;
`

export const Block2 = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${theme.palette.secondary.main()};
  position: absolute;
  top: -60px;
  right: 30px;
  border-top-right-radius: 100px;
`

export const Block3 = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${theme.palette.tertiary.main()};
  position: absolute;
  bottom: -65px;
  right: 0px;
  border-radius: 120px;
`

export const Block4 = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  left: 75px;
  bottom: -100px;
  border-style: solid;
  border-width: 75px 0 75px 130px;
  border-color: transparent transparent transparent #D6BBFB;
  transform: rotate(15deg);
`
