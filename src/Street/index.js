import React from 'react'
import _ from 'lodash'

import {
	MOODS,
	SIGHTS,
	SOUNDS,
	SMELLS,
	USES,
	TYPES,
	DETAILS,
} from './constants'

const Street = () => {
	const [isExpanded, setIsExpanded] = React.useState(true)

	const [mood, setMood] = React.useState()
	const [sights, setSights] = React.useState()
	const [sounds, setSounds] = React.useState()
	const [smells, setSmells] = React.useState()
	const [use, setUse] = React.useState()
	const [type, setType] = React.useState()
	const [details, setDetails] = React.useState()

	React.useEffect(() => {
		if (!mood) setMood(_.sample(MOODS))
		if (!sights) setSights(_.sample(SIGHTS))
		if (!sounds) setSounds(_.sample(SOUNDS))
		if (!smells) setSmells(_.sample(SMELLS))
		if (!use) setUse(_.sample(USES))
		if (!type) setType(_.sample(TYPES))
		if (!details) setDetails(_.sample(DETAILS))
	}, [details, mood, sights, smells, sounds, type, use])

	const streetDetails = (
		<div>
			<div>Mood: {mood}</div>
			<div>Sights: {sights}</div>
			<div>Sounds: {sounds}</div>
			<div>Smells: {smells}</div>
			<div>Use: {use}</div>
			<div>Type: {type}</div>
			<div>Details: {details}</div>
		</div>
	)

	return (
		<div>
			<div>Street</div>
			{isExpanded && streetDetails}
		</div>
	)
}

export default Street
