import React from 'react';

import Colors from '../shared/colors'
import {
  RiRouteLine as StreetIcon,
  RiUser2Line as PersonIcon,
  RiBuildingLine as BuildingIcon,
} from 'react-icons/ri'

import config from '../config'
import RandomCreation from './RandomCreation'
import DaggerDiv from '../shared/DaggerDiv'

import {
  AppContainer,
  SideBar,
  Logo,
  CreateButton,
  BladeGenList,
} from './styled'

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
    } else {
      return
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

  React.useEffect(() => {
    generate('Person')
  }, [])

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
