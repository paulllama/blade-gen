import React from 'react'

import Colors from './colors'
import styled from 'styled-components'

const ActionBase = styled.div`
	cursor: pointer;
	transition-property: color opacity;
	transition-duration: 200ms;
`

const DisabledAction = styled(ActionBase)`
	opacity: 0.5;
`

const EnabledAction = styled(ActionBase)`
	transition-property: color;
	transition-duration: 200ms;

	&:hover {
		color: ${Colors.ACTION}
	}
`

const ActionDiv = ({ disabled, children, onClick, ...props }) => disabled
	? <DisabledAction {...props}>{children}</DisabledAction>
	: <EnabledAction onClick={onClick} {...props}>{children}</EnabledAction>

export default ActionDiv