import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AtomicImg from '$lib/imgs/atomic.png';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';
import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';

// Your resume data
export let DATA = {
	name: 'Giacomo Folli',
	initials: 'GF',
	url: 'https://github.com/giacomo-folli',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Parma, Italy',
	locationLink: 'https://www.google.com/maps/place/parma',
	description:
		'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
	summary:
		'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Sil// icon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
	avatarUrl: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	skills: [
		'Svelte',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Python',
		'Go',
		'Postgres',
		'Redis',
		'Docker',
		'Linux',
		'Dart'
	],
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
				url: 'https://x.com/otter_by_day',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'PeerList',
				url: 'https://peerlist.io/bhide',
				// // icon: Icons.x,
				icon: PeerListSvg,
				navbar: true,
				dark_icon: PeerListDarkSvg
			},
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
			logoUrl: AtomicImg,
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
			logoUrl: 'https://www.unipr.it/themes/custom/unipr/logo.svg',
			start: '2020',
			end: '2025'
		}
	],
	projects: [
		// {
		// 	title: 'Chat Collect',
		// 	href: 'https://chatcollect.com',
		// 	dates: 'Jan 2024 - Feb 2024',
		// 	active: true,
		// 	description:
		// 		'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Stripe',
		// 		'Shadcn UI',
		// 		'Magic UI'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://chatcollect.com',
		// 			// icon: <Icons.globe className="size-3" />,
		// 			icon: Globe
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		// },
		// {
		// 	title: 'Magic UI',
		// 	href: 'https://magicui.design',
		// 	dates: 'June 2023 - Present',
		// 	active: true,
		// 	description: 'Designed, developed and sold animated UI components for developers.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Stripe',
		// 		'Shadcn UI',
		// 		'Magic UI'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://magicui.design',
		// 			// icon: <Icons.globe className="size-3" />,
		// 			icon: Globe
		// 		},
		// 		{
		// 			type: 'Source',
		// 			href: 'https://github.com/magicuidesign/magicui',
		// 			icon: Github
		// 			// icon: <Icons.github className="size-3" />,
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://cdn.magicui.design/bento-grid.mp4'
		// },
		// {
		// 	title: 'llm.report',
		// 	href: 'https://llm.report',
		// 	dates: 'April 2023 - September 2023',
		// 	active: true,
		// 	description:
		// 		'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://llm.report',
		// 			icon: Globe
		// 			// icon: <Icons.globe className="size-3" />,
		// 		},
		// 		{
		// 			type: 'Source',
		// 			href: 'https://github.com/dillionverma/llm.report',
		// 			icon: Github
		// 			// icon: <Icons.github className="size-3" />,
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://cdn.llm.report/openai-demo.mp4'
		// },
		// {
		// 	title: 'Automatic Chat',
		// 	href: 'https://automatic.chat',
		// 	dates: 'April 2023 - March 2024',
		// 	active: true,
		// 	description:
		// 		'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
		// 	technologies: [
		// 		'Next.js',
		// 		'Typescript',
		// 		'PostgreSQL',
		// 		'Prisma',
		// 		'TailwindCSS',
		// 		'Shadcn UI',
		// 		'Magic UI',
		// 		'Stripe',
		// 		'Cloudflare Workers'
		// 	],
		// 	links: [
		// 		{
		// 			type: 'Website',
		// 			href: 'https://automatic.chat',
		// 			icon: Globe
		// 			// icon: <Icons.globe className="size-3" />,
		// 		}
		// 	],
		// 	image: '',
		// 	video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		// }
	],
	hackathons: [
		// {
		// 	title: 'Hack Western 5',
		// 	dates: 'November 23rd - 25th, 2018',
		// 	location: 'London, Ontario',
		// 	description:
		// 		'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
		// 	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
		// 	links: []
		// },
		// {
		// 	title: 'Hack The North',
		// 	dates: 'September 14th - 16th, 2018',
		// 	location: 'Waterloo, Ontario',
		// 	description:
		// 		'Developed a mobile application which delivers university campus wide events in real time to all students.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
		// 	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
		// 	links: []
		// },
		// {
		// 	title: 'FirstNet Public Safety Hackathon',
		// 	dates: 'March 23rd - 24th, 2018',
		// 	location: 'San Francisco, California',
		// 	description:
		// 		'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
		// 	// icon: "public",
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
		// 	links: []
		// },
		// {
		// 	title: 'DeveloperWeek Hackathon',
		// 	dates: 'February 3rd - 4th, 2018',
		// 	location: 'San Francisco, California',
		// 	description:
		// 		'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
		// 	links: [
		// 		{
		// 			title: 'Github',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/cryptotrends/cryptotrends'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'HackDavis',
		// 	dates: 'January 20th - 21st, 2018',
		// 	location: 'Davis, California',
		// 	description:
		// 		'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
		// 	win: 'Best Data Hack',
		// 	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
		// 	links: [
		// 		{
		// 			title: 'Devpost',
		// 			icon: Globe,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://devpost.com/software/my6footprint'
		// 		},
		// 		{
		// 			title: 'ML',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/Wallet6/my6footprint-machine-learning'
		// 		},
		// 		{
		// 			title: 'iOS',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/Wallet6/CarbonWallet'
		// 		},
		// 		{
		// 			title: 'Server',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/Wallet6/wallet6-server'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'ETH Waterloo',
		// 	dates: 'October 13th - 15th, 2017',
		// 	location: 'Waterloo, Ontario',
		// 	description:
		// 		'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
		// 	links: [
		// 		{
		// 			title: 'Organization',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/ethdocnet'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Hack The North',
		// 	dates: 'September 15th - 17th, 2017',
		// 	location: 'Waterloo, Ontario',
		// 	description:
		// 		'Developed a virtual reality application allowing users to see themselves in third person.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
		// 	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
		// 	links: [
		// 		{
		// 			title: 'Streamer Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/justinmichaud/htn2017'
		// 		},
		// 		{
		// 			title: 'Client Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/dillionverma/RTSPClient'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Hack The 6ix',
		// 	dates: 'August 26th - 27th, 2017',
		// 	location: 'Toronto, Ontario',
		// 	description:
		// 		'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
		// 	mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
		// 	links: [
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/ShareShip/ShareShip'
		// 		},
		// 		{
		// 			title: 'Site',
		// 			icon: Globe,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://share-ship.herokuapp.com/'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Stupid Hack Toronto',
		// 	dates: 'July 23rd, 2017',
		// 	location: 'Toronto, Ontario',
		// 	description:
		// 		'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
		// 	links: [
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/nsagirlfriend/nsagirlfriend'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'Global AI Hackathon - Toronto',
		// 	dates: 'June 23rd - 25th, 2017',
		// 	location: 'Toronto, Ontario',
		// 	description:
		// 		'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
		// 	win: '1st Place Winner',
		// 	links: [
		// 		{
		// 			title: 'Article',
		// 			icon: Globe,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
		// 		},
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/TinySamosas/'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'McGill AI for Social Innovation Hackathon',
		// 	dates: 'June 17th - 18th, 2017',
		// 	location: 'Montreal, Quebec',
		// 	description: 'Developed realtime facial microexpression analyzer using AI',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
		// 	links: []
		// },
		// {
		// 	title: 'Open Source Circular Economy Days Hackathon',
		// 	dates: 'June 10th, 2017',
		// 	location: 'Toronto, Ontario',
		// 	description:
		// 		"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
		// 	image:
		// 		'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
		// 	win: '1st Place Winner',
		// 	links: [
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			// icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/dillionverma/genecis'
		// 		}
		// 	]
		// },
		// {
		// 	title: "Make School's Student App Competition 2017",
		// 	dates: 'May 19th - 21st, 2017',
		// 	location: 'International',
		// 	description: 'Improved PocketDoc and submitted to online competition',
		// 	image:
		// 		'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
		// 	win: 'Top 10 Finalist | Honourable Mention',
		// 	links: [
		// 		{
		// 			title: 'Medium Article',
		// 			icon: Github,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
		// 		},
		// 		{
		// 			title: 'Devpost',
		// 			icon: Globe,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://devpost.com/software/pocketdoc-react-native'
		// 		},
		// 		{
		// 			title: 'YouTube',
		// 			icon: Youtube,
		// 			// icon: <Icons.youtube className="h-4 w-4" />,
		// 			href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
		// 		},
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			href: 'https://github.com/dillionverma/pocketdoc-react-native'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'HackMining',
		// 	dates: 'May 12th - 14th, 2017',
		// 	location: 'Toronto, Ontario',
		// 	description: 'Developed neural network to optimize a mining process',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
		// 	links: []
		// },
		// {
		// 	title: 'Waterloo Equithon',
		// 	dates: 'May 5th - 7th, 2017',
		// 	location: 'Waterloo, Ontario',
		// 	description:
		// 		'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
		// 	links: [
		// 		{
		// 			title: 'Devpost',
		// 			icon: Globe,
		// 			// icon: <Icons.globe className="h-4 w-4" />,
		// 			href: 'https://devpost.com/software/pocketdoc-react-native'
		// 		},
		// 		{
		// 			title: 'YouTube',
		// 			icon: Youtube,
		// 			// icon: <Icons.youtube className="h-4 w-4" />,
		// 			href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
		// 		},
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			//   // icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/dillionverma/pocketdoc-react-native'
		// 		}
		// 	]
		// },
		// {
		// 	title: 'SpaceApps Waterloo',
		// 	dates: 'April 28th - 30th, 2017',
		// 	location: 'Waterloo, Ontario',
		// 	description:
		// 		'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
		// 	image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
		// 	links: [
		// 		{
		// 			title: 'Source',
		// 			icon: Github,
		// 			//   // icon: <Icons.github className="h-4 w-4" />,
		// 			href: 'https://github.com/dillionverma/earthwatch'
		// 		}
		// 	]
		// },
	]
};
