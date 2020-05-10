import React from 'react';
import styled from 'styled-components'

import Colors from '../shared/colors'
import {
  RiRouteLine as StreetIcon,
  RiUser2Line as PersonIcon,
  RiBuildingLine as BuildingIcon,
} from 'react-icons/ri'

import config from '../config'
import RandomCreation from './RandomCreation'
import DaggerDiv from '../shared/DaggerDiv'
import ActionDiv from '../shared/ActionDiv'

const AppContainer = styled.div`
  background: ${Colors.BACKGROUND};
  width: 100vw;
  min-height: 100vh;
  color: ${Colors.TEXT}
`

const SIDE_BAR_WIDTH = '8rem'

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${Colors.NAV};
  display: flex;
  flex-direction: column;
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

const CreateButton = styled(ActionDiv)`
  padding: 1.25rem 2rem;
  font-size: 3.5rem;
  line-height: 0.75;
  text-align: center;
`

const BladeGenList = styled.div`
  color: ${Colors.TEXT};
  padding-left: ${SIDE_BAR_WIDTH};
  margin-left: 1.5em;
`
const BladeGen = () => {
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
        <DaggerDiv
          color={Colors.LOGO}
          direction="vertical"
          sizeInRem={8}
          flatStart={true}
        >
          <Logo>Blade Gen</Logo>
        </DaggerDiv>
        <DaggerDiv
          color={Colors.NAV}
          direction="vertical"
          sizeInRem={8}
        >
          <CreateButton onClick={() => generate('Person')}>
            <PersonIcon />
          </CreateButton>
          <CreateButton onClick={() => generate('Building')}>
            <BuildingIcon  />
          </CreateButton>
          <CreateButton onClick={() => generate('Street')}>
            <StreetIcon />
          </CreateButton>
        </DaggerDiv>
      </SideBar>
      <BladeGenList>
        {bladeGens}
      </BladeGenList>
    </AppContainer>
  )
}

export default BladeGen
