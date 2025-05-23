import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	
	{
		slug: 'Web Developer Intern',
		company: 'HAZHTEQ INNOVATIONS',
		description: 'Developed a responsive review-based marketing platform for shops, integrating verification systems and discount networking. Utilized HTML, CSS, and PHP for frontend and backend, ensuring seamless interaction and quality service, with local testing and data migration.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Spearheaded the development of a responsive review-based marketing platform for shops.</li>'+
		'<li>Integrated verification systems and discount networking to enhance user experience.</li>'+
		'<li>Employed HTML, CSS, and JavaScript for frontend development to ensure responsiveness.</li>'+
		'<li>Utilized PHP for backend development, guaranteeing seamless interaction and quality service.</li>'+
		'<li>Conducted local testing and data migration to maintain platform integrity and efficiency.</li>'+
		'</ul>'
		,
		contract: ContractType.Internship,
		type: 'Website Development',
		location: 'Vadodara',
		period: { from: new Date(2023, 0, 1)},
		skills: getSkills('css', 'html', 'js','Php'),
		name: 'Web Developer Intern',
		color: 'white',
		links: [{ to: 'https://technograil.in/bsos/', label: 'Live' }],
		logo: Assets.Haztech,
		shortDescription: 'Developed awesome Varification Website for customers.'
	},
	{
		slug: 'AR-Research-Intern',
		company: 'FLAW-D',
		description: 'Created AR-based customizable T-shirts featuring anime characters using Three.js and AR Scanner.' +
		'Designed and modeled GLTF character models, enabling full customization of six different T-shirt' +
		'designs, integrating HTML for element manipulation.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Led the creation of AR-based customizable T-shirts featuring anime characters</li>'+
		'<li>Developed GLTF character models, facilitating full customization of six different T-shirt designs.</li>'+
		'<li>Integrated Three.js and AR Scanner for immersive augmented reality experiences.</li>'+
		'<li>Leveraged HTML for element manipulation to enhance user customization options.</li>'+
		'<li>Ensured seamless interaction and user engagement through meticulous design and development.</li>'+
		'</ul>'
		,
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Home',
		period: {from: new Date(2023, 2, 1), to: new Date(2023, 5, 1) },
		skills: getSkills('', 'js'),
		name: 'AR Research Intern',
		color: 'red',
		links: [],
		logo: Assets.Flawd,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'Python-Research-Intern',
		company: 'Befriends.ai',
		description: 'Researched diverse cloud hosting solutions, integrating Flask AI API with personal AI assistants and digital avatars across various platforms. Hosted Flask AI API on multiple cloud platforms to ensure seamless interaction with personal AI assistants, emphasizing Flask and cloud technologies.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Conducted extensive research on diverse cloud hosting solutions.</li>'+
		'<li>Integrated Flask AI API with personal AI assistants and digital avatars across various platforms.</li>'+
		'<li>Hosted Flask AI API on multiple cloud platforms to optimize performance and accessibility.</li>'+
		'<li>Ensured seamless interaction with personal AI assistants through robust Flask and cloud technologies.</li>'+
		'<li>Played a key role in enhancing user experiences by leveraging innovative AI integration strategies.</li>'+
		'</ul>'
		,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Vadodara',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 1)  },
		skills: getSkills('python','Flask','Hosting Services','CI/CD','Character Ai'),
		name: 'Python Research Intern',
		color: 'purple',
		links: [],
		logo: Assets.Befriends,
		shortDescription: 'Developing awsome character ai assistane and integrating with Android app of Befriends'
	},
	{
		slug: 'Summer Intern',
		company: 'MSU',
		description: 'Developed an advanced attendance system using the application of the IOT.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Developed an advanced attendance system using Arduino programming and data Management skill.</li>'+
		'<li>Established Serial Communication between micro-controllers for efficient data transfer.</li>'+
		'<li>Managed project data effectively using Google Docs.</li>'+
		'<li>Published two research papers, demonstrating innovative solutions and contributions during the internship .</li>'+
		'</ul>'
		,
		contract: ContractType.Internship,
		type: 'IOT Development',
		location: 'Vadodara',
		period: { from: new Date(2023, 6, 1),to: new Date(2023, 7, 1)},
		skills: getSkills('Arduino'),
		name: 'Summer Intern',
		color: 'white',
		links: [{ to: 'https://www.digitalxplore.org/up_proc/pdf/2330-170056684718-26.pdf', label: 'Research Paper' }],
		logo: Assets.MSU,
		shortDescription: 'Developed awesome IOT bases Attendance System for Department.'
	},
	{
		slug: 'Microsoft Learn Student Ambassador',
		company: 'Microsoft',
		description: 'Spread awerness to the microsoft technology.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Developed proficiency in public speaking and refined communication skills.</li>'+
		'<li>Mastered Azure Cloud Platform and Azure AI Fundamentals .</li>'+
		'<li>Crafted a personalized portfolio website using React and hosted it on Azure Static Web Application.</li>'+
		'<li>POrchestrated workshops, advocated for free Microsoft technologies, and organized events as a Beta MLSA, contributing to global student community advancement.</li>'+
		'</ul>'
		,
		contract: ContractType.Contract,
		type: 'Student Ambassador',
		location: 'Vadodara',
		period: { from: new Date(2023, 12, 1)},
		skills: getSkills('Azure'),
		name: 'Microsoft Learn Student Ambassador',
		color: 'white',
		links: [],
		logo: Assets.Microsoft,
		shortDescription: 'Spread awerness to the microsoft technology.'
	},{
		slug: 'Full Stack Developer',
		company: 'HAZHTEQ INNOVATIONS',
		description: 'Develpoing the new infrastructure and ecosystem.<br><br>'+
		'<b>Accomplishments:</b>'+
		'<ul type="disc">'+
		'<li>Developing new App.</li>'+
		'<li>Updating new Infrastructure.</li>'+
		'</ul>'
		,
		contract: ContractType.PartTime,
		type: 'Full Stack Development',
		location: 'Vadodara',
		period: { from: new Date(2024, 9, 1)},
		skills: getSkills('css', 'html', 'js','Php','Dart','Firebase','NextJs','reactjs','MongoDB','Flask'),
		name: 'Full Stack Developer',
		color: 'white',
		links: [{ to: 'https://technograil.in/bsos/', label: 'Live' }],
		logo: Assets.Haztech,
		shortDescription: 'Developing new infrastructure'
	},
	
	
];

export const title = 'Experience';
