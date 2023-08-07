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
	greetingMorning: 'Coucou!',
	greetingAfternoon: 'Wesh,',
	greetingEvening: 'Hallo,',
	greetingNight: 'Au lit !',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '58875cc64a5974b1f95f5b2acdf5491f', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
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
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
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
			icon: 'at-sign',
			id: '1',
			links: [
				{
					name: 'Mastodon',
					link: 'https://rivals.space/home',
				},
				{
					name: 'PixelFed',
					link: 'https://pixelfed.social/i/web',
				},
				{
					name: 'Kbin',
					link: 'https://kbin.social/sub',
				},
				{
					name: 'Tumblr',
					link: 'https://www.tumblr.com/dashboard',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/feed/subscriptions',
				},
				{
					name: 'Twitch',
					link: 'https://www.twitch.tv/directory/following',
				},
				{
					name: 'Tilvids',
					link: 'https://tilvids.com/home',
				},
				{
					name: 'Bandcamp',
					link: 'https://bandcamp.com/',
				},
				{
					name: 'Soundcloud',
					link: 'https://soundcloud.com/discover',
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
					name: 'Notion',
					link: 'https://www.notion.so/Livres-et-lectures-0160e79b52d549bebe48d88b71bbc225',
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
					name: 'Médical',
					link: 'https://www.notion.so/M-dical-0391bdb3141344ca850bd725b1b59eb2',
				},
				{
					name: 'Banque postale',
					link: 'https://www.labanquepostale.fr/',
				},
				{
					name: 'RED by SFR',
					link: 'https://www.red-by-sfr.fr/mon-espace-client/?casforcetheme=espaceclientred#sfrclicid=EC_mire_Me-Connecter',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
	],
};
