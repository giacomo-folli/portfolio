import { CodeIcon, Github, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import MediumSvg from '$lib/imgs/medium.svg';
import MediumDarkSvg from '$lib/imgs/medium-dark.svg';

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
	birth_year: 2001,
	url: 'https://github.com/giacomo-folli',
	img: 'https://giacomofolli.com/profile.png',
	location: 'Salsomaggiore Terme (PR), Italy',
	locationLink: 'https://www.google.com/maps/place/salsomaggiore+terme',
	description:
		'Full-Stack Software Developer, Engineering Student, OS Mantainer. I like computers & co.',
	summary:
		'tldr; learnt by hacking around on the internet.\n\nfull-stack developer with production experience in Svelte, Node.js, AdonisJS, PostgreSQL and MongoDB. next to client work i keep open source side projects alive, from system programming in Rust and Go to AI integrations.\n\ni like technology and deep science. they make a dent in the universe.\n\ni like to surround myself with music, electronics and friends.',
	avatarUrl: 'https://giacomofolli.com/profile.png',
	skills: [
		{ title: 'Typescript' },
		{ title: 'Javascript' },
		{ title: 'Svelte / SvelteKit' },
		{ title: 'React' },
		{ title: 'Node.js' },
		{ title: 'AdonisJS' },
		{ title: 'Go' },
		{ title: 'Rust' },
		{ title: 'Python' },
		{ title: 'SQL' },
		{ title: 'PostgreSQL' },
		{ title: 'MongoDB' },
		{ title: 'Redis' },
		{ title: 'BullMQ' },
		{ title: 'Docker' },
		{ title: 'CI/CD' },
		{ title: 'Git' },
		{ title: 'Linux' },
		{ title: 'Agile/Scrum' },
		{ title: 'Slow runs on strava', class: 'bg-[#F97316] hover:bg-[#F97316] text-white', href: '' }
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '/#projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'giacomofolli@proton.me',
		tel: '+39 324 824 6374',
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
			Medium: {
				name: 'Medium',
				url: 'https://medium.com/@pvco',
				icon: MediumSvg,
				navbar: true,
				dark_icon: MediumDarkSvg
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
			company: 'Self Employed',
			href: 'https://github.com/giacomo-folli',
			badges: ['Freelance'],
			location: 'Remote, IT',
			title: 'Freelance Software Developer',
			logoUrl: '/logo.png',
			start: 'Nov 2023',
			end: 'Ongoing',
			description:
				'Design and development of responsive showcase websites and web applications for a range of clients, owning the whole project lifecycle from requirements to deployment. Built performant frontends with Svelte and TypeScript, with a focus on accessibility and loading speed. Handled client relationships directly, ensuring on-time delivery and high code quality standards.'
		},
		{
			company: 'LH s.r.l.',
			href: 'https://likablehair.it',
			badges: [],
			location: 'Piacenza, IT',
			title: 'Web Application Developer',
			logoUrl: '/lh.png',
			start: 'Nov 2023',
			end: 'Dec 2025',
			description:
				'Development and maintenance of full-stack web platforms with Svelte, Node.js and AdonisJS, integrating PostgreSQL and MongoDB. Optimized Docker-based CI/CD pipelines, improving release reliability and speed. Implemented asynchronous job scheduling with BullMQ, secure authentication systems and internationalization (i18n). Worked in an Agile team, contributing to internal open source projects (Likable Tools).'
		}
	],
	education: [
		{
			school: 'Università degli Studi di Parma',
			href: 'https://www.unipr.it/',
			degree: 'Ingegneria Informatica, Bachelor',
			logoUrl: '/unipr.png',
			start: '2021',
			end: 'Ongoing'
		}
	],
	certifications: [
		{
			name: 'Google Cybersecurity Professional Certificate',
			issuer: 'Coursera',
			date: 'Sep 2025'
		},
		{
			name: 'Google UX Design Professional Certificate',
			issuer: 'Coursera',
			date: 'Oct 2024'
		}
	],
	languages: [
		{ name: 'Italian', level: 'Native' },
		{ name: 'English', level: 'C1 comprehension · B2 written and spoken' },
		{ name: 'French', level: 'A2' }
	],
	projects: [
		{
			title: 'asmlings',
			href: 'https://github.com/giacomo-folli/asmlings',
			dates: '2025',
			active: true,
			description:
				'Educational sandbox for Intel 8086 assembly programming, built around an emulator written from scratch in Rust.',
			technologies: ['Rust', 'Assembly', 'Intel 8086', 'Systems Programming'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/giacomo-folli/asmlings',
					icon: Github
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'strava-ai',
			href: 'https://github.com/giacomo-folli/strava-ai',
			dates: '2025',
			active: true,
			description:
				'AI powered running coach integrated with the Strava APIs, providing training analysis and personalized recommendations.',
			technologies: ['SvelteKit', 'Typescript', 'Strava API', 'AI'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/giacomo-folli/strava-ai',
					icon: Github
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'reflectiv',
			href: 'https://github.com/giacomo-folli/reflectiv',
			dates: '2024 — archived',
			active: false,
			description:
				'Web app that generates personalized monthly reflection journals as PDFs through AI. Archived.',
			technologies: ['Svelte', 'Typescript', 'AI', 'PDF'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/giacomo-folli/reflectiv',
					icon: Github
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'go-shell',
			href: 'https://github.com/giacomo-folli/go-shell',
			dates: '2024',
			active: true,
			description:
				'Unix-like shell implemented from scratch in Go, to dig into process management and system programming.',
			technologies: ['Go', 'Unix', 'Systems Programming'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/giacomo-folli/go-shell',
					icon: Github
				}
			],
			image: '',
			video: ''
		}
	],
	hackathons: []
};
