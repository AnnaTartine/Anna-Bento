// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Anna',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Coucou',
	greetingAfternoon: 'Coucou',
	greetingEvening: 'Coucou',
	greetingNight: 'Coucou',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '58875cc64a5974b1f95f5b2acdf5491f', // Write here your API Key
	weatherIcons: 'Onedark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'fr', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Mastodon',
			icon: 'tent-tree',
			link: 'https://rivals.space/home',
		},
		{
			id: '2',
			name: 'Pixelfed',
			icon: 'bird',
			link: 'https://pixelfed.social/i/web',
		},
		{
			id: '3',
			name: 'Instagram',
			icon: 'camera',
			link: 'https://www.instagram.com/',
		},
		{
			id: '4',
			name: 'Twitch',
			icon: 'tv',
			link: 'https://www.twitch.tv/' ,
		},
		{
			id: '5',
			name: 'Youtube',
			icon: 'monitor-play',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
		{
			id: '6',
			name: 'Cloud',
			icon: 'cloud',
			link: 'https://use04.thegood.cloud/apps/files/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'notebook',
			id: '1',
			links: [
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
				{
					name: 'FreshRSS',
					link: 'https://rss.hostux.net/i/',
				},
				{
					name: 'Wallabag',
					link: 'https://app.wallabag.it/unread/list',
				},
				{
					name: 'Crisco',
					link: 'https://crisco4.unicaen.fr/des/',
				},
				
			],
		},
		{
			icon: 'cassette-tape',
			id: '2',
			links: [
				{
					name: 'NTS',
					link: 'https://www.nts.live/',
				},
				{
					name: 'Soundcloud',
					link: 'https://soundcloud.com/discover',
				},
				{
					name: 'Bandcamp',
					link: 'https://bandcamp.com/',
				},
				{
					name: 'Libre.fm',
					link: 'https://libre.fm/user/AnnaTartine',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'book-open',
			id: '1',
			links: [
				{
					name: 'Médiapart',
					link: 'https://www.mediapart.fr/',
				},
				{
					name: 'Les jours',
					link: 'https://lesjours.fr/',
				},
				{
					name: 'Wallabag',
					link: 'https://app.wallabag.it/unread/list',
				},
				{
					name: 'FreshRSS',
					link: 'https://news.beep.computer/i/',
				},
				
			],
		},
		{
			icon: 'paperclip',
			id: '2',
			links: [
				{
					name: 'Good Cloud',
					link: 'https://use04.thegood.cloud/apps/calendar/timeGridWeek/now',
				},
				{
					name: 'Faune Grand-Est',
					link: 'https://www.faune-grandest.org/',
				},
				{
					name: 'Banque postale',
					link: 'https://www.labanquepostale.fr/',
				},
				{
					name: 'Notion',
					link: 'https://www.notion.so/Livres-et-lectures-0160e79b52d549bebe48d88b71bbc225',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
	],
};
