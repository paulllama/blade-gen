import React from 'react'
import _ from 'lodash'

import Colors from '../shared/colors'
import {
  RiRouteLine as StreetIcon,
  RiUser2Line as PersonIcon,
  RiBuildingLine as BuildingIcon,
  RiUserSmileLine as AuthorIcon,
  RiInformationLine as InfoIcon,
  RiPlayListAddLine as CreateIcon,
  RiLightbulbFlashLine as IdeasIcon,
} from 'react-icons/ri'
import {
	BsLockFill as LockedIcon,
  BsShuffle as ShuffleIcon,
} from 'react-icons/bs'

import config from '../config'
import RandomCreation from './RandomCreation'
import DaggerDiv from '../shared/DaggerDiv'

import {
  AppContainer,
  SideBar,
  Logo,
  CreateButton,
  BladeGenList,
  MetaData,
  AboutAnchor,
  About,
  AboutClose,
  AboutP,
} from './styled'

function bladeGenListReducer(state, { key, elem }) {
  return {
    ...state,
    [key]: elem,
  }
}

const BladeGen = () => {
  const [bladeGens, setBladeGens] = React.useReducer(bladeGenListReducer, {})
  const [count, setCount] = React.useState(0)
  const [showingAbout, setShowingAbout] = React.useState(false)

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

    const key = `${type}${count}`

    setBladeGens({
      key,
      elem: (
        <RandomCreation
          key={key}
          type={type}
          lists={lists}
          remove={() => { remove(key) }}
        />
      ),
    })
    setCount(count + 1)
  }

  const remove = key => {
    setBladeGens({
      key,
      elem: null,
    })
  }

  // Create a random item to start
  React.useEffect(() => {
    const type = _.sample(['Person', 'Building', 'Street'])
    generate(type)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <DaggerDiv
          color={Colors.NAV_ALT}
          direction="vertical"
          sizeInRem={8}
        >
          <MetaData
            target="_blank"
            rel="noopener noreferrer"
            href="http://paularmer.me"
            icon={<AuthorIcon />}
          >
            Paul Armer
          </MetaData>
          <MetaData
            onClick={() => setShowingAbout(!showingAbout)}
            icon={<InfoIcon />}
          >
            About
          </MetaData>
        </DaggerDiv>
      </SideBar>
      <BladeGenList>
        {Object.values(bladeGens)}
      </BladeGenList>
      <AboutAnchor visible={showingAbout}>
        <DaggerDiv
          color={Colors.NAV_ALT}
          direction="vertical"
          sizeInRem={15}
        >
          <About>
            <AboutClose onClick={() => setShowingAbout(false)}/>
            <AboutP>
              Generate random people, buildings, and streets for the the
              table top RPG <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.evilhat.com/home/blades-in-the-dark/"
              >
                Blades in the Dark
              </a>.
            </AboutP>
            <AboutP icon={<CreateIcon />}>Create as many things as you'd like.</AboutP>
            <AboutP icon={<ShuffleIcon />}>Reroll till you make something good.</AboutP>
            <AboutP icon={<LockedIcon />}>Save what you like.</AboutP>
            <AboutP icon={<IdeasIcon />}>More feautres coming!</AboutP>
          </About>
        </DaggerDiv>
      </AboutAnchor>
    </AppContainer>
  )
}

export default BladeGen
