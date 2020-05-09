import React from 'react';
import styled from 'styled-components'

import Colors from './styles/colors'
import { FaRoad, FaUserFriends, FaBuilding } from 'react-icons/fa'

import config from './config'
import RandomCreation from './RandomCreation'

const AppContainer = styled.div`
  background: ${Colors.BACKGROUND};
  width: 100vw;
  min-height: 100vh;
  color: ${Colors.TEXT}
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

const Logo = styled.h1`
  background: ${Colors.LOGO};
  border-color: ${Colors.LOGO};
  color: ${Colors.BACKGROUND};
  padding: 0.75rem 1rem;
  font-size: 2rem;
  line-height: 1;
  position: relative;
  margin: 0.5rem 0;
  height: 2.2rem;
  color: black;
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

  const generate = type => {
    let lists = {}

    if (type === 'Person') {
      lists = config.Person
    } else if (type === 'Building') {
      lists = config.Building
    } else if (type === 'Street') {
      lists = config.Street
    }

    setBladeGens([
      <RandomCreation
        key={bladeGens.length}
        type={type}
        lists={lists}
      />,
      ...bladeGens,
    ])
  }

  return (
    <AppContainer>
      <SideBar>
        <JaggedDiv color={Colors.NAV}>
          <CreateButton onClick={() => generate('Person')}>
            <FaUserFriends />
          </CreateButton>
          <CreateButton onClick={() => generate('Building')}>
            <FaBuilding  />
          </CreateButton>
          <CreateButton onClick={() => generate('Street')}>
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
