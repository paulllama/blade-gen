import React from 'react'
import _ from 'lodash'

import DaggerDiv from '../../shared/DaggerDiv'
import Colors from '../../shared/colors'

import {
	CreationContainer,
	CreationHeader,
	CreationType,
} from './styled'

const RandomCreation = ({ type, lists }) => {
	const [creation, setCreation] = React.useState({})

	React.useEffect(() => {
		const newChoices = {}
		let hasChanges = false

		console.log({ lists })

		_.map(lists, (list, name) => {
			if (!creation[name]) {
				hasChanges = true
				newChoices[name]= _.sample(list)
			}
		})

		if (hasChanges) {
			setCreation({
				...creation,
				...newChoices,
			})
		}
	}, [lists, creation])

	const details = _.map(creation, (value, key) => (
		<div>
			<div>{key}</div>
			<div>{value}</div>
		</div>
	))

	return (
		<CreationContainer>
			<CreationHeader>
				<DaggerDiv
					color={Colors.NAV}
					direction="horizontal"
					sizeInRem={2.5}
				>
					<CreationType>{type}</CreationType>
				</DaggerDiv>
			</CreationHeader>
			{details}
		</CreationContainer>
	)
}

export default RandomCreation