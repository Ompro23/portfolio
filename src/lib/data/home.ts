import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'OM';

export const lastName = 'VATALIYA';

export const description =
	'I am a Beta Microsoft Learn Student Ambassador (MLSA) and a ' +
	'BCA Computer Science student at Maharaja Sayajirao University ' +
	'(MSU). I have a passion for innovation and problem-solving, and I ' +
	'enjoy exploring and mastering various tech stacks. ' +
	'I Love to learn new technologies and know more about advancements. ' 
	;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Omcodes23' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/omcodes23'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	// {
	// 	platform: Platform.Email,
	// 	link: 'riadh_adrani@hotmail.fr'
	// },
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('html','css','Bootstrap','Tailwind', 'js', 'reactjs', 'sass', 'svelte', 'ts' ,'python','Android','C','Cpp','Firebase','Illustrator','MongoDB','Photoshop','PostgreSQL','Vite','java');
