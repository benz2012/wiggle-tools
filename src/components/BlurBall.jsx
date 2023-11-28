import styled from 'styled-components'

import theme from '../theme'

const SIZE = 400

const BlurBall = styled.div`
  z-index: -100;
  position: absolute;
  top: ${props => props.top ? props.top : 0}px;
  left: ${props => props.side === 'left' ? `-${theme.spacing.balls}px` : 'none'};
  right: ${props => props.side === 'right' ? `-${theme.spacing.balls}px` : 'none'};

  width: ${SIZE}px;
  height: ${SIZE}px;

  background: radial-gradient(
    ${props => theme.palette[props.variant || 'primary'].main(0.33)},
    ${theme.palette.background.main()}
  );

  border-radius: ${SIZE / 2}px;
  filter: blur(100px)
`

export default BlurBall
