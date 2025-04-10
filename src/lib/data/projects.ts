import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

//ecommerce frontend
import homeImg from '../components/Screens/EcommerceFrontend/home.png';
import cartImg from '../components/Screens/EcommerceFrontend/cart.png';
import producyImg from '../components/Screens/EcommerceFrontend/products.png';

//quizz app
import login from '../components/Screens/MERNStackQuizzapp/login.png';
import createquiz from '../components/Screens/MERNStackQuizzapp/createQuizz.png';
import addques from '../components/Screens/MERNStackQuizzapp/Questionsadd.png';
import activequizz from '../components/Screens/MERNStackQuizzapp/activequizz.png';
import result from '../components/Screens/MERNStackQuizzapp/result.png';

//text summeraizer
import textsumhome from '../components/Screens/Test-Summarizer/home.png';

//fugen
import fugenhome from '../components/Screens/fugen/home.png';
import fugencart from '../components/Screens/fugen/cart.png';
import fl1 from '../components/Screens/fugen/sc1.png';
import fl2 from '../components/Screens/fugen/sc2.png';
import fl3 from '../components/Screens/fugen/sc3.png';
import fl4 from '../components/Screens/fugen/sc4.png';

//fullpager
import bfhome from '../components/Screens/befriends-fullpage/home.png';
import bfhelp from '../components/Screens/befriends-fullpage/help.png';
import bechos from '../components/Screens/befriends-fullpage/choose.png';
import bfcompa from '../components/Screens/befriends-fullpage/compa.png';
import bfus from '../components/Screens/befriends-fullpage/us.png';
import bffull from '../components/Screens/befriends-fullpage/fullpager.png';

//Varification system
import vftop from '../components/Screens/VarificationSystem/hometop.png';
import vfform from '../components/Screens/VarificationSystem/homeform.png';
import vfbot from '../components/Screens/VarificationSystem/homebotttom.png';
import vfadd1 from '../components/Screens/VarificationSystem/admin1.png';
import vfadd2 from '../components/Screens/VarificationSystem/admin2.png';

//Beconnect
import bf1 from '../components/Screens/Beconnect/Screen1.png';
import bf2 from '../components/Screens/Beconnect/Screen2.png';
import bf3 from '../components/Screens/Beconnect/Screen3.png';
import bf4 from '../components/Screens/Beconnect/Screen4.png';
import bf5 from '../components/Screens/Beconnect/Screen5.png';
import bf6 from '../components/Screens/Beconnect/Screen6.png';
import bf7 from '../components/Screens/Beconnect/Screen7.png';
import bf8 from '../components/Screens/Beconnect/Screen8.png';
import bf9 from '../components/Screens/Beconnect/Screen9.png';

//attendance system
import at1 from '../components/Screens/Attendace-system/cp.png';
import at2 from '../components/Screens/Attendace-system/at2.png';

//artemyx 
import  ar1 from '../components/Screens/artemyx/h1.png';
import ar2 from '../components/Screens/artemyx/h2.png';
import ar3 from '../components/Screens/artemyx/h3.png';
import ar4 from '../components/Screens/artemyx/h4.png';
import ar5 from '../components/Screens/artemyx/h5.png';
import ar6 from '../components/Screens/artemyx/h6.png';
import ar7 from '../components/Screens/artemyx/h7.png';
import ar8 from '../components/Screens/artemyx/h8.png';
import ar9 from '../components/Screens/artemyx/h9.png';

export const items: Array<Project> = [
	{
		slug: 'Artemyx',
		color: 'white',
		description:
			'I build a website for the AR based Fashion brand with amazing UI/UX and ecommerce functionality using next.js, Mongodb.',
		shortDescription: 'AR Fashion Brand Website with full ecommerce',
		links: [
			{
				to: 'https://artemyx.vercel.app/',
				label: 'live'
			}
		],
		logo: Assets.NextJs,
		name: 'Artemyx',
		period: {
			from: new Date(2024, 6, 1),
			to: new Date(2024, 8, 1)
		},
		skills: getSkills('reactjs','NextJs','MongoDB'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Hero Section',
				src: ar1
			},
			{
				label: 'Intro Section',
				src: ar2
			}
			,
			{
				label: 'Team Section',
				src: ar3
			}
			,
			{
				label: 'Shop Section',
				src: ar4
			}
			,
			{
				label: 'About Section',
				src: ar5
			}
			,
			{
				label: 'Influ Section',
				src: ar6
			}
			,
			{
				label: 'Checkout Section',
				src: ar7
			}
			,
			{
				label: 'Admin Section',
				src: ar8
			}
			,
			{
				label: 'T&C Section',
				src: ar9
			}

		]
	},
	{
		slug: 'Advance-Attendance-System',
		color: 'green',
		description:
			'I developed an advance attendance system using the serial communication between esp 8266 and arduino during my summer internship',
		shortDescription: 'Advacne attendance system for the department of computer application',
		links: [
			{
				to: 'https://www.digitalxplore.org/up_proc/pdf/2330-170056684718-26.pdf',
				label: 'Research Paper'
			}
		],
		logo: Assets.Arduino,
		name: 'Advance-Attendance-System',
		period: {
			from: new Date(2023, 5, 1),
			to: new Date(2023, 10, 1)
		},
		skills: getSkills('Arduino'),
		type: 'IOT',
		screenshots: [
			{
				label: 'Component Diagram',
				src: at1
			},
			{
				label: 'prototype',
				src: at2
			}
		]
	},
	{
		slug: 'Review-Based-Discount-System',
		color: 'red',
		description:
			'I developed a Review Based Discount System for local shop keppers this thing helps them to increase selles adn growing their market.',
		shortDescription: 'Review-Based-Discount-System for Local Shop Keppers',
		links: [{ to: 'https://technograil.in/bsos/', label: 'Live' }],
		logo: Assets.HTML,
		name: 'Review-Based-Discount-System',
		period: {
			from: new Date(2022, 9, 1),
			to: new Date(2023, 1, 1)
		},
		skills: getSkills('js', 'html', 'css', 'Php'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Home',
				src: vftop
			},
			{
				label: 'Admin',
				src: vfform
			},
			{
				label: 'Help',
				src: vfbot
			},
			{
				label: 'About US',
				src: vfadd1
			},
			{
				label: 'Companions',
				src: vfadd2
			}
		]
	},
	{
		slug: 'Beconnect',
		color: 'green',
		description:
			'I developed an Android application for making industrial connection and sharing things to broder perspective',
		shortDescription: 'Industrial Connection making platform',
		links: [],
		logo: Assets.Android,
		name: 'Beconnect',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2024, 1, 1)
		},
		skills: getSkills('Android'),
		type: 'Android App',
		screenshots: [
			{
				label: 'Screen-1',
				src: bf1
			},
			{
				label: 'Screen-2',
				src: bf2
			},
			{
				label: 'Screen-3',
				src: bf3
			},
			{
				label: 'Screen-4',
				src: bf4
			},
			{
				label: 'Screen-5',
				src: bf5
			},
			{
				label: 'Screen-6',
				src: bf6
			},
			{
				label: 'Screen-7',
				src: bf7
			},
			{
				label: 'Screen-8',
				src: bf8
			},
			{
				label: 'Screen-9',
				src: bf9
			}
		]
	},
	{
		slug: 'Flawd-Clothing-Store',
		color: 'red',
		description: 'An Inovative era of new meta society with the 3d tshirts and ar visualization',
		shortDescription: 'Flawd-Clothing-Store an innovative era of meta univerce with 3d tshirts',
		links: [
			{ to: 'https://omcodes23.github.io/fugen/', label: 'Prototype' },
			{ to: 'https://imflawd.technograil.in/index.html', label: 'Live' }
		],
		logo: Assets.HTML,
		name: 'Flawd-Clothing-Store',
		period: {
			from: new Date(2023, 2, 1),
			to: new Date(2023, 6, 1)
		},
		skills: getSkills('js', 'html', 'css', 'Php'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Prototype Screen1',
				src: fugenhome
			},
			{
				label: 'Prototype Screen2',
				src: fugencart
			},
			{
				label: 'Live Screen 1',
				src: fl1
			},
			{
				label: 'Live Screen 2',
				src: fl2
			},
			{
				label: 'Live Screen 3',
				src: fl3
			},
			{
				label: 'Live Screen 4',
				src: fl4
			}
		]
	},
	{
		slug: 'ecommerce-store-frontend-reactjs',
		color: '#5e95e3',
		description: 'I had Made an ecommerce store frontend using react js with the basic concepts.',
		shortDescription: 'Ecommerce store Frontend using reactjs',
		links: [{ to: 'https://mern-stack-projects-rho.vercel.app/', label: 'Live' }],
		logo: Assets.ReactJs,
		name: 'Ecommerce Frontend',
		period: {
			from: new Date(2022, 1, 1),
			to: new Date(2022, 1, 3)
		},
		skills: getSkills('reactjs'),
		type: 'Website Template',
		screenshots: [
			// ...

			{
				label: 'Home',
				src: homeImg
			},
			{
				label: 'Cart',
				src: cartImg
			},
			{
				label: 'Products',
				src: producyImg
			}
		]
	},
	{
		slug: 'MERN-Stack-Quiz-Site',
		color: '#5e95e3',
		description: 'This is the Full stack Qizz Web App using MERN Stack',
		shortDescription: 'MERN Stack Quiz Site',
		links: [
			{
				to: 'https://github.com/Omcodes23/MERN-stack-projects/tree/main/Major%20project',
				label: 'GitHub'
			}
		],
		logo: Assets.ReactJs,
		name: 'MERN-Stack-Quiz-Website',
		period: {
			from: new Date(2022, 2, 1),
			to: new Date(2022, 2, 10)
		},
		skills: getSkills('reactjs', 'MongoDB', 'Nodejs', 'ExpressJs'),
		type: 'Web App',
		screenshots: [
			{
				label: 'Login',
				src: login
			},
			{
				label: 'Create Quiz',
				src: createquiz
			},
			{
				label: 'Add Question',
				src: addques
			},
			{
				label: 'Active Quiz',
				src: activequizz
			},
			{
				label: 'Result',
				src: result
			}
		]
	},
	{
		slug: 'Text-Summarizer-App',
		color: 'yellow',
		description: 'A Text Summerizer using Posman API',
		shortDescription: 'Test-Summarizer',
		links: [{ to: 'https://github.com/Omcodes23/AI-Text-Summarizer-App', label: 'GitHub' }],
		logo: Assets.JavaScript,
		name: 'Text-Summarizer-WebApp',
		period: {
			from: new Date(2022, 5, 1),
			to: new Date(2022, 5, 2)
		},
		skills: getSkills('js', 'html', 'css', 'Postman'),
		type: 'Web App',
		screenshots: [
			{
				label: 'Home',
				src: textsumhome
			}
		]
	},

	{
		slug: 'Befriends-Fullpage.js',
		color: 'green',
		description: 'Befriends.ai Company website using FullPage.js library',
		shortDescription: 'Befriends.ai-Fullpage.js',
		links: [{ to: 'https://harshul1484.github.io/befriends-fullpage.js/', label: 'Live' }],
		logo: Assets.Fullpage,
		name: 'Befriends-Fullpage.js',
		period: {
			from: new Date(2023, 1, 1),
			to: new Date(2023, 1, 5)
		},
		skills: getSkills('js', 'html', 'css', 'FullPageJs'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'Home',
				src: bfhome
			},
			{
				label: 'Services',
				src: bechos
			},
			{
				label: 'Help',
				src: bfhelp
			},
			{
				label: 'About US',
				src: bfus
			},
			{
				label: 'Companions',
				src: bfcompa
			},
			{
				label: 'Full View Of Website',
				src: bffull
			}
		]
	}
];

export const title = 'Projects';
