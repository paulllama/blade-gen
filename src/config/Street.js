const USES_COMMON = [
	'Residential',
	'Crafts',
	'Labor',
	'Shops',
	'Trade',
	'Hospitality',
]

const USES_UNCOMMON = [
	'Law, Government',
	'Public Space',
	'Power',
	'Manufacture',
	'Transportation',
	'Leisure',
]

const USES_RARE = [
	'Vice',
	'Entertainment',
	'Storage',
	'Cultivation',
	'Academic',
	'Artists',
]

const TYPES_COMMON = [
	'Narrow Lane',
	'Tight Alley',
	'Twisting Street',
	'Rough Road',
	'Bridge',
	'Waterway',
]

const TYPES_UNCOMMON = [
	'Closed Court',
	'Open Plaza',
	'Paved Avenue',
	'Tunnel',
	'Wide Boulevard',
	'Roundabout',
]

const TYPES_RARE = [
	'Elevated',
	'Flooded',
	'Suspended',
	'Subterranean',
	'Floating',
	'Private, Gated',
]

export default {
	'Mood': [
		'Dark or Cold',
		'Bright or Lively',
		'Quiet or Refined',
		'Abandoned or Decrepit',
		'Cramped or Noisy',
		'Cozy or Warm',
	],

	'Sights': [
		'Rain Slick, Oil Slick',
		'Dancing Shadows, Flickering Lights',
		'Mist, Fog, Frost',
		'Fleeting Shapes, Echoes in the Ghost Field',
		'Soot, Ash Clouds, Grime',
		'Crackling Electricity, Wires, Mechanisms',
	],

	'Sounds': [
		'Machinery, Workers',
		'Fluttering Cloth, Howling Wind',
		'Laughter, Song, Music',
		'Whispers, Echoes, Strange Voices',
		'Thunder, Driving Rain',
		'Bells, Clock Chimes, Harbor Horns',
	],

	'Smells': [
		'Cook Fires, Furnaces',
		'Damp Wood, Decay, Refuse',
		'Animals, Hides, Blood',
		'Chemicals, Distillates, Fumes',
		'Rain Water, Ocean',
		'Ozone, Electroplasmic Discharges',
	],

	'Use': [
		// Match the distribution of use types (pg. 300)
		...USES_COMMON,
		...USES_COMMON,
		...USES_COMMON,
		...USES_UNCOMMON,
		...USES_UNCOMMON,
		...USES_RARE,
	],

	'Type': [
		// Match the distribution of use types (pg. 300)
		...TYPES_COMMON,
		...TYPES_COMMON,
		...TYPES_COMMON,
		...TYPES_UNCOMMON,
		...TYPES_UNCOMMON,
		...TYPES_RARE,
	],

	'Detail': [
		'Metal Supports',
		'Ironwork Gates, Fences',
		'Belching Chimneys',
		'Metal Grates, Hatches, Doors',
		'Clockwork Mechanisms',
		'Rigging, Cables',
		'Stairs, Ramps. Terraces',
		'Wooden Scaffolds',
		'Skyways',
		'Rooftop Spaces',
		'Rails,Train Cars',
		'Hidden Passages',
		'Banners, Pennants',
		'Festival Decorations',
		'Crowd, Parade, Riot',
		'Street Performers',
		'Makeshift Stalls, Shelters',
		'Crisscrossing Routes',
		'Gang Markings',
		'Patrol Posts',
		'Lookouts',
		'Stocks, Public Punishment',
		'Street Crier, Visionary',
		'News Stand, Public Notices',
		'Stray Animals',
		'Landscaping',
		'Muck, Mire',
		'Construction, Demolition',
		'Foul Runoff, Fumes, Smoke',
		'Orphans, Beggars',
		'Ancient Ruin',
		'Leering Gargoyles',
		'Spirit Chimes, Wards',
		'Eerie Emptiness',
		'Quarantine, Lockdown',
		'Shrine Offerings',
	],
}