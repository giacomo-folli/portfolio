import { CodeIcon, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AtomicImg from '$lib/imgs/atomic.png';
// import ShopifyImg from '$lib/imgs/shopify.svg';
// import NvidiaImg from '$lib/imgs/nvidia.png';
// import SplunkImg from '$lib/imgs/splunk.svg';
// import LimeImg from '$lib/imgs/lime.svg';
// import MitreMediaImg from '$lib/imgs/mitremedia.png';
// import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
// import WaterLooImg from '$lib/imgs/waterloo.png';
// import LaurierImg from '$lib/imgs/laurier.png';
// import IBImg from '$lib/imgs/ib.png';

// Your resume data
export let DATA = {
	name: 'Giacomo Folli',
	initials: 'GF',
	url: 'https://github.com/giacomo-folli',
	img: 'https://giacomofolli.com/profile.png',
	location: 'Parma, Italy',
	locationLink: 'https://www.google.com/maps/place/parma',
	description: 'Software Developer, Engineering Student, OS Mantainer. I like computers & co.',
	summary:
		'tldr; learnt by hacking around on the internet.\n\ni like technology and deep science. they make a dent in the universe.\n\ni like to surround myself with music, electronics and friends.',
	avatarUrl: 'https://giacomofolli.com/profile.png',
	skills: ['Svelte', 'Typescript', 'Docker', 'Python', 'Linux', 'Slow runs on strava'],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'giacomofolli@proton.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/giacomo-folli',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/giacomo-folli/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/packo_bit',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			// PeerList: {
			// 	name: 'PeerList',
			// 	url: 'https://peerlist.io/bhide',
			// 	// // icon: Icons.x,
			// 	icon: PeerListSvg,
			// 	navbar: true,
			// 	dark_icon: PeerListDarkSvg
			// },
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Likable Hair',
			href: 'https://likablehair.it',
			badges: [],
			location: 'Piacenza, IT',
			title: 'Full Stack Developer',
			logoUrl: '/lh.png',
			start: 'Sep 2023',
			end: 'Ongoing',
			description:
				'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.'
		}
	],
	education: [
		{
			school: 'Università degli Studi di Parma',
			href: 'https://www.unipr.it/',
			degree: "Bachelor's Degree of IT Engineering",
			logoUrl: '/unipr.png',
			start: '2020',
			end: '2025'
		}
	],
	projects: [
		// ... (unchanged)
	],
	hackathons: [
		// ... (unchanged)
	]
};
