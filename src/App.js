import React from 'react';
import styled from 'styled-components'

import Colors from './styles/colors'
import Fonts from './styles/fonts'
import { FaRoad, FaUserFriends, FaBuilding } from 'react-icons/fa'

import Building from './Building'
import Person from './Person'
import Street from './Street'

const AppContainer = styled.div`
  background: ${Colors.BACKGROUND};
  width: 100vw;
  min-height: 100vh;
  color: ${Colors.TEXT}

  * {
    font-family: ${Fonts.BODY};
  }
`

const SIDE_BAR_WIDTH = '8rem'

const JaggedDiv = styled.div`
  background: ${({ color }) => color};
  border-color: ${({ color }) => color};
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;
    border-style: solid;
    border-width: 2rem 4rem;
    border-color: ${({ color }) => color} transparent transparent ${({ color }) => color};
  }
`

const SideBar = styled.div`
  width: ${SIDE_BAR_WIDTH};
  position: fixed;
  top: 0;
  left: 0;
  background: ${Colors.NAV};
  display: flex;
  flex-direction: column-reverse;
`

const Logo = styled.div`
  background: ${Colors.LOGO};
  border-color: ${Colors.LOGO};
  padding: 0.75rem 1rem;
  font-family: ${Fonts.TITLE};
  font-size: 2rem;
  line-height: 1;
  position: relative;
  height: 2.2rem;
`

const CreateButton = styled.div`
  padding: 1.25rem 2rem;
  cursor: pointer;
  font-size: 3.5rem;
  line-height: 0.75;
  text-align: center;

  &:first-of-type {
    padding-top: 4rem;
  }

  &:hover {
    color: ${Colors.ACTION}
  }
`

const BladeGenList = styled.div`
  color: ${Colors.TEXT};
  padding-left: ${SIDE_BAR_WIDTH};
  margin-left: 1.5em;
`

const App = () => {
  const [bladeGens, setBladeGens] = React.useState([])

  const generate = Type => {
    setBladeGens([
      <Type key={bladeGens.length} />,
      ...bladeGens,
    ])
  }

  return (
    <AppContainer>
      <SideBar>
        <JaggedDiv color={Colors.NAV}>
          <CreateButton onClick={() => generate(Person)}>
            <FaUserFriends />
          </CreateButton>
          <CreateButton onClick={() => generate(Building)}>
            <FaBuilding  />
          </CreateButton>
          <CreateButton onClick={() => generate(Street)}>
            <FaRoad />
          </CreateButton>
        </JaggedDiv>
        <JaggedDiv color={Colors.LOGO}>
          <Logo>Blade Gen</Logo>
        </JaggedDiv>
      </SideBar>
      <BladeGenList>
        {bladeGens}
      </BladeGenList>
    </AppContainer>
  )
}

export default App
