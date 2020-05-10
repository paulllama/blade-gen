import Colors from './colors'
import styled from 'styled-components'

const ActionDiv = styled.div`
	cursor: pointer;
	transition-property: color;
	transition-duration: 200ms;

	&:hover {
		color: ${Colors.ACTION}
	}
`

export default ActionDiv