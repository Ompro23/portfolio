import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Other Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'I have worked on many projects using JavaScript, applying it in various web development contexts.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Sql',
		color: 'blue',
		description: 'I have used SQL in projects for database management and querying.',
		logo: Assets.Sql,
		name: 'Sql',
		category: 'lang'
	}),
	defineSkill({
		slug: 'Git',
		color: 'orange',
		description: 'I use Git for version control in all my projects, managing code collaboratively and efficiently.',
		logo: Assets.Git,
		name: 'Git',
		category: 'lang'
	}),
	defineSkill({
		slug: 'Shell',
		color: 'yellow',
		description: 'I have basic knowledge of shell scripting and use it for automation in my development workflow.',
		logo: Assets.Shell,
		name: 'Shell',
		category: 'lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'I have extensive experience with CSS, using it in all my web development projects for styling and layout.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML is the foundation of all my web projects, and I have strong proficiency in creating structured, semantic markup.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'I have used Sass in projects to enhance my CSS workflow and create more maintainable stylesheets.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'I have built several projects using React.js, leveraging its component-based architecture for efficient UI development.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'I have used Python in various projects, particularly for backend development and data processing tasks.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'java',
	// 	color: 'red',
	// 	description: 'I have experience with Java, having used it in academic projects and for Android app development.',
	// 	logo: Assets.Java,
	// 	name: 'Java',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'Php',
		color: 'blue',
		description: 'I have implemented basic concepts in PHP for CRUD operations and managing reviews in web projects.',
		logo: Assets.Php,
		name: 'Php',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Illustrator',
		color: 'orange',
		description: 'I am learning the concepts of Illustrator for creating vector graphics and illustrations.',
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'Vite',
		color: 'purple',
		description: 'I have used Vite in recent projects as a build tool for faster development and optimized production builds.',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Photoshop',
		color: 'darkblue',
		description: 'I am learning Photoshop for image editing and manipulation, enhancing my design skills.',
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'MongoDB',
		color: 'lightgreen',
		description: 'I have used MongoDB in projects as a NoSQL database solution, particularly for web applications.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'Firebase',
		color: 'yellow',
		description: 'I have integrated Firebase in projects for real-time database, authentication, and hosting services.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'Android',
		color: 'green',
		description: 'I have developed Android applications using Java and the Android SDK.',
		logo: Assets.Android,
		name: 'Android',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'C',
	// 	color: 'white',
	// 	description: 'I have a solid foundation in C programming, having used it in academic projects and algorithm implementations.',
	// 	logo: Assets.C,
	// 	name: 'C',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'Cpp',
		color: 'white',
		description: 'I have experience with C++ from academic projects and competitive programming.',
		logo: Assets.Cpp,
		name: 'Cpp',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Bootstrap',
		color: 'purple',
		description: 'I have used Bootstrap in multiple web projects for responsive and mobile-first front-end development.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Flask',
		color: 'white',
		description: 'I have built web applications using Flask, a lightweight Python web framework.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Postman',
		color: 'orange',
		description: 'I use Postman for API testing and development in my projects.',
		logo: Assets.Postman,
		name: 'Postman',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Nodejs',
		color: 'lightgreen',
		description: 'I have used Node.js in several projects for server-side JavaScript development.',
		logo: Assets.NodeJs,
		name: 'Nodejs',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ExpressJs',
		color: 'gray',
		description: 'I have built RESTful APIs and web applications using Express.js on top of Node.js.',
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'FullPageJs',
		color: 'lightgreen',
		description: 'I have used FullPage.js in projects to create full-screen scrolling websites.',
		logo: Assets.Fullpage,
		name: 'FullPageJs',
		category: 'framework'
	}),
	
	defineSkill({
		slug: 'NextJs',
		color: 'white',
		description: 'I have used next.js in projects for building modern UI.',
		logo: Assets.NextJs,
		name: 'NextJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Arduino',
		color: 'lightgreen',
		description: 'I have worked on Arduino projects, programming microcontrollers for various IoT and embedded systems applications.',
		logo: Assets.Arduino,
		name: 'Ardunio',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Azure',
		color: 'blue',
		description: 'I am learning Azure cloud services and their applications in modern software development.',
		logo: Assets.azure,
		name: 'Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'Docker',
		color: 'blue',
		description: 'I have starter expereince with the docker for deploying on the docker hub',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
