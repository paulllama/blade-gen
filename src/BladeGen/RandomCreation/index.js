import React from 'react'
import _ from 'lodash'

import {
	RiLockLine as LockedIcon,
	RiLockUnlockLine as UnlockedIcon,
} from 'react-icons/ri'
import { BsShuffle as ShuffleIcon } from 'react-icons/bs'

import DaggerDiv from '../../shared/DaggerDiv'
import Colors from '../../shared/colors'

import {
	CreationContainer,
	CreationHeader,
	CreationType,
	CreationAction,
} from './styled'

const RandomCreation = ({ type, lists }) => {
	const [isLocked, setIsLocked] = React.useState(false)
	const [creation, setCreation] = React.useState({})

	React.useEffect(() => {
		const newChoices = {}
		let hasChanges = false

		if (isLocked) {
			return
		}

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

	const ICON_SIZE = '1.35rem'

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
					flatStart
				>
					<CreationType>{type}</CreationType>
				</DaggerDiv>
				<DaggerDiv
					color={Colors.NAV_ALT}
					direction="horizontal"
					sizeInRem={2.5}
				>
					<CreationAction onClick={() => setIsLocked(!isLocked)}>
						{isLocked ? <LockedIcon size={ICON_SIZE} /> : <UnlockedIcon size={ICON_SIZE} />}
					</CreationAction>
					<CreationAction onClick={() => setCreation({})}>
						<ShuffleIcon size={ICON_SIZE} />
					</CreationAction>
				</DaggerDiv>
			</CreationHeader>
			{details}
		</CreationContainer>
	)
}

export default RandomCreation