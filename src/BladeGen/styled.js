import React from 'react'
import styled from 'styled-components'
import ActionDiv from '../shared/ActionDiv'
import Colors from '../shared/colors'
import {
	RiCloseLine as CloseIcon,
} from 'react-icons/ri'

export const AppContainer = styled.div`
	width: 80vw;
	max-width: 50rem;
  padding: 3rem 1rem 2rem 10rem;
  color: ${Colors.TEXT};
`

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${Colors.NAV};
  display: flex;
  flex-direction: column;
`

export const Logo = styled.h1`
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

export const CreateButton = styled(ActionDiv)`
  padding: 1.25rem 2rem;
  font-size: 3.5rem;
  line-height: 0.75;
  text-align: center;
`

export const BladeGenList = styled.div`
  color: ${Colors.TEXT};
  margin-left: 1.5em;
	display: flex;
	flex-direction: column-reverse;
`

const StyledMetaData = styled.a`
  color: ${Colors.TEXT};
	text-decoration: none;
	margin-left: 1rem;
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	opacity: 0.5;
	cursor: pointer;
	transition-property: opacity;
	transition-duration: 200ms;

	&:hover {
		opacity: 1;
	}
`

const StyledMetaDataText = styled.div`
	margin-left: 0.25rem;
`

export const MetaData = ({ icon, children, ...rest }) => (
	<StyledMetaData {...rest}>
		{icon}<StyledMetaDataText>{children}</StyledMetaDataText>
	</StyledMetaData>
)

export const AboutAnchor = styled.div`
	position: fixed;
	right: 0;
	bottom: ${({ visible }) => visible ? '0' : '-50vh'};
	opacity: ${({ visible }) => visible ? '1' : '0.5'};
	transition-property: bottom opacity;
	transition-duration: 500ms;
`

export const About = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 1rem 1.5rem 1.5rem;
	position: relative;

	a {
		color: ${Colors.ACTION};
		font-weight: bold;
		text-decoration: none;
		border-bottom-width: 0;
		border-bottom-style: solid;

		&:hover {
			border-bottom-width: 1px;
		}
	}
`

const AboutParagraphWrapper = styled.div`
	margin-bottom: 0.75rem;
	display: flex;
	flex-direction: row;
`

const AboutParagraphIcon = styled.div`
	margin-right: 0.4rem;
`

const AboutParagraphText = styled.p`
	margin: 0 0 0.5rem;
`

export const AboutP = ({ icon, children }) => (
	<AboutParagraphWrapper>
		{icon && <AboutParagraphIcon>{icon}</AboutParagraphIcon>}
		<AboutParagraphText>{children}</AboutParagraphText>
	</AboutParagraphWrapper>
)

const CloseAnchor = styled.div`
	position: absolute;
	right: 1rem;
	top: -3rem;
	font-size: 2rem;
	opacity: 0.5;
	cursor: pointer;
	transition-property: opacity;
	transition-duration: 200ms;

	&:hover {
		opacity: 0.8;
	}
`

export const AboutClose = ({ onClick }) => (
	<CloseAnchor onClick={onClick}>
		<CloseIcon />
	</CloseAnchor>
)