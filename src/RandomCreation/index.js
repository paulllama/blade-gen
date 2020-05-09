import React from 'react'
import _ from 'lodash'

const RandomCreation = ({ type, lists }) => {
	const [isExpanded, setIsExpanded] = React.useState(true)
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
		<div>
			<div>{type}</div>
			{isExpanded && details}
		</div>
	)
}

export default RandomCreation