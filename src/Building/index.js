import React from 'react'
import _ from 'lodash'

import {
	MATERIALS,
	EXTERIOR_DETAILS,
	USES,
	USES_RARE,
	INTERIOR_DETAILS,
} from './constants'

const Building = () => {
	const [isExpanded, setIsExpanded] = React.useState(true)

	const [material, setMaterial] = React.useState()
	const [exteriorDetails, setExteriorDetails] = React.useState()
	const [use, setUse] = React.useState()
	const [useRare, setUseRare] = React.useState()
	const [interiorDetails, setInteriorDetails] = React.useState()

	React.useEffect(() => {
		if (!material) setMaterial(_.sample(MATERIALS))
		if (!exteriorDetails) setExteriorDetails(_.sample(EXTERIOR_DETAILS))
		if (!use) setUse(_.sample(USES))
		if (!useRare) setUseRare(_.sample(USES_RARE))
		if (!interiorDetails) setInteriorDetails(_.sample(INTERIOR_DETAILS))
	}, [
		exteriorDetails,
		interiorDetails,
		material,
		use,
		useRare,
	])

	const details = (
		<div>
			<div>Material: {material}</div>
			<div>Exterior Details: {exteriorDetails}</div>
			<div>Use: {use}</div>
			<div>Use (rare): {useRare}</div>
			<div>Interior Details: {interiorDetails}</div>
		</div>
	)

	return (
		<div>
			<div>Person</div>
			{isExpanded && details}
		</div>
	)
}

export default Building