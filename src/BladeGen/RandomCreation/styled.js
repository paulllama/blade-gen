import styled from 'styled-components'

import ActionDiv from '../../shared/ActionDiv'

export const CreationContainer = styled.div`
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