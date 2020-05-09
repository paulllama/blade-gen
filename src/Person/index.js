import React from 'react'
import _ from 'lodash'

import {
	HERITAGES,
	GENDERS,
	LOOKS,
	GOALS,
	METHODS,
	PROFESSIONS,
	PROFESSIONS_RARE,
	TRAITS,
	INTERESTS,
	QUIRKS,
} from './constants'

const Person = () => {
	const [isExpanded, setIsExpanded] = React.useState(true)
	const [heritage, setHeritage] = React.useState()
	const [gender, setGender] = React.useState()
	const [looks, setLooks] = React.useState()
	const [goals, setGoals] = React.useState()
	const [methods, setMethods] = React.useState()
	const [profession, setProfession] = React.useState()
	const [professionRare, setProfessionRare] = React.useState()
	const [traits, setTraits] = React.useState()
	const [interests, setInterests] = React.useState()
	const [quirks, setQuirks] = React.useState()

	React.useEffect(() => {
		if (!gender) setGender(_.sample(GENDERS))
		if (!goals) setGoals(_.sample(GOALS))
		if (!heritage) setHeritage(_.sample(HERITAGES))
		if (!interests) setInterests(_.sample(INTERESTS))
		if (!looks) setLooks(_.sample(LOOKS))
		if (!methods) setMethods(_.sample(METHODS))
		if (!profession) setProfession(_.sample(PROFESSIONS))
		if (!professionRare) setProfessionRare(_.sample(PROFESSIONS_RARE))
		if (!quirks) setQuirks(_.sample(QUIRKS))
		if (!traits) setTraits(_.sample(TRAITS))
	}, [
		gender,
		goals,
		heritage,
		interests,
		looks,
		methods,
		profession,
		professionRare,
		quirks,
		traits,
	])

	const details = (
		<div>
			<div>Heritage: {heritage}</div>
			<div>Gender: {gender}</div>
			<div>Looks: {looks}</div>
			<div>Goals: {goals}</div>
			<div>Methods: {methods}</div>
			<div>Profession: {profession}</div>
			<div>Profession (Rare): {professionRare}</div>
			<div>Traits: {traits}</div>
			<div>Interest: {interests}</div>
			<div>Quirks: {quirks}</div>
		</div>
	)

	return (
		<div>
			<div>Person</div>
			{isExpanded && details}
		</div>
	)
}

export default Person