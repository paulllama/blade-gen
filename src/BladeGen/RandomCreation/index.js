import React from 'react'
import _ from 'lodash'

import {
	RiDeleteBinLine as TrashIcon,
} from 'react-icons/ri'
import {
	BsShuffle as ShuffleIcon,
} from 'react-icons/bs'

import DaggerDiv from '../../shared/DaggerDiv'
import Colors from '../../shared/colors'

import {
	CreationContainer,
	CreationHeader,
	CreationType,
	CreationAction,
	AttributeList,
	Attribute,
	AttributeLabel,
	AttributeValue,
	Locked,
	Unlocked,
} from './styled'

const RandomCreation = ({ type, lists, remove }) => {
	const [lockedAttrs, setLockedAttrs] = React.useState({})
	const [creation, setCreation] = React.useState({})

	React.useEffect(() => {
		const newChoices = {}
		let hasChanges = false

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
	}, [lists, creation, lockedAttrs])

	const toggleLock = attrName => {
		const isLocked = lockedAttrs[attrName]

		setLockedAttrs({
			...lockedAttrs,
			[attrName]: !isLocked,
		})
	}

	const shuffle = () => {
		const savedFields = _.pickBy(creation, (value, name) => lockedAttrs[name])
		setCreation(savedFields)
	}

	const ICON_SIZE = '1.35rem'

	// Iterate over `lists` to preserve order
	const attributes = _.map(lists, (list, name) => {
		const isLocked = lockedAttrs[name]
		const value = creation[name]

		return (
			<Attribute key={name}>
				<AttributeLabel onClick={() => toggleLock(name)}>
					{name}
					{/* The icon shows the current state. */}
					{!isLocked && <Unlocked />}
					{isLocked && <Locked />}
				</AttributeLabel>
				<AttributeValue>{value}</AttributeValue>
			</Attribute>
		)
	})

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
					{/* <CreationAction onClick={() => setIsLocked(!isLocked)}>
						{isLocked ? <LockedIcon size={ICON_SIZE} /> : <UnlockedIcon size={ICON_SIZE} />}
					</CreationAction> */}
					<CreationAction onClick={() => shuffle()}>
						<ShuffleIcon size={ICON_SIZE} />
					</CreationAction>
					<CreationAction onClick={() => remove()}>
						<TrashIcon size={ICON_SIZE} />
					</CreationAction>
				</DaggerDiv>
			</CreationHeader>
			<AttributeList>
				{attributes}
			</AttributeList>
		</CreationContainer>
	)
}

export default RandomCreation