import React from 'react'
import styled from 'styled-components'

import {
	BsLockFill as LockedIcon,
	BsUnlock as UnlockedIcon,
} from 'react-icons/bs'

import Colors from '../../shared/colors'
import ActionDiv from '../../shared/ActionDiv'

export const CreationContainer = styled.div`
	border-left: 2px solid ${Colors.NAV};
	margin-bottom: 1.5rem;
`

export const CreationHeader = styled.div`
	display: flex;
	flex-direction: row;

	> * {
		display: flex;
	}
`

export const CreationType = styled.h2`
	margin: 0 0.45rem 0 0.75rem;
	line-height: 1.5;
`

export const CreationAction = styled(ActionDiv)`
	margin: 0.5rem;
`

export const AttributeList = styled.div`
	padding: 0.75rem 0.75rem 0;
	display: flex;
	flex-direction: columm;
	flex-wrap: wrap;
`

export const Attribute = styled.div`
	margin-bottom: 1rem;
	margin-right: 2rem;
`

export const AttributeLabel = styled(ActionDiv)`
	text-transform: uppercase;
	font-size: 0.85rem;
	font-weight: 500;
	color: ${Colors.NAV};
`

export const AttributeValue = styled.div`
	margin-top: 0.25rem;
	font-size: 1.15rem;
`

const UnlockedWrapper = styled.div`
	margin-left: 0.35rem;
	display: inline-block;
`
const LockedWrapper = styled.div`
	margin-left: 0.25rem;
	display: inline-block;
	margin-right: 0.1rem;
`

export const Unlocked = props => {
	return (
		<UnlockedWrapper {...props}>
			<UnlockedIcon />
		</UnlockedWrapper>
	)
}

export const Locked = props => {
	return (
		<LockedWrapper {...props}>
			<LockedIcon />
		</LockedWrapper>
	)
}