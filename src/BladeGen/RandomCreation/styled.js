import styled from 'styled-components'


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

export const AttributeLabel = styled.div`
	text-transform: uppercase;
	font-size: 0.85rem;
	font-weight: 500;
	color: ${Colors.NAV};
`

export const AttributeValue = styled.div`
	margin-top: 0.25rem;
	font-size: 1.15rem;
`