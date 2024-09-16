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
		description:
			'I had worked in Many projects using Js .',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'ts',
	// 	color: 'blue',
	// 	description:
	// 		'I had worked very little in the TypeScript but when ever used it is deffinatly worth using',
	// 	logo: Assets.TypeScript,
	// 	name: 'Typescript',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'Sql',
		color: 'blue',
		description: '',
		logo: Assets.Sql,
		name: 'Sql',
		category: 'lang'
	}),
	defineSkill({
		slug: 'Git',
		color: 'orange',
		description: '',
		logo: Assets.Git,
		name: 'Git',
		category: 'lang'
	}),
	defineSkill({
		slug: 'Shell',
		color: 'yellow',
		description: '',
		logo: Assets.Shell,
		name: 'Shell',
		category: 'lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'library'
	// }),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Php',
		color: 'blue',
		description: 'I implemtnted the basic concepts in the php fore the CURD operation and manadaging reviews',
		logo: Assets.Php,
		name: 'Php',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Illustrator',
		color: 'orange',
		description: '',
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'Vite',
		color: 'purple',
		description: '',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Photoshop',
		color: 'darkblue',
		description: '',
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'design'
	}),
	// defineSkill({
	// 	slug: 'Tailwind',
	// 	color: 'orange',
	// 	description: '',
	// 	logo: Assets.Tailwind,
	// 	name: 'Tailwind',
	// 	category: 'framework'
	// }),
	defineSkill({
		slug: 'MongoDB',
		color: 'lightgreen',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'Firebase',
		color: 'yellow',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	// defineSkill({
	// 	slug: 'PostgreSQL',
	// 	color: 'orange',
	// 	description: '',
	// 	logo: Assets.PostgreSQL,
	// 	name: 'PostgreSQL',
	// 	category: 'db'
	// }),
	defineSkill({
		slug: 'Android',
		color: 'green',
		description: '',
		logo: Assets.Android,
		name: 'Android',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'C',
		color: 'white',
		description: '',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Cpp',
		color: 'white',
		description: '',
		logo: Assets.Cpp,
		name: 'Cpp',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Bootstrap',
		color: 'purple',
		description: '',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Flask',
		color: 'white',
		description: '',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Postman',
		color: 'orange',
		description: '',
		logo: Assets.Postman,
		name: 'Postman',
		category: 'devtools'
	}),
	
	defineSkill({
		slug: 'Nodejs',
		color: 'lightgreen',
		description: '',
		logo: Assets.NodeJs,
		name: 'Nodejs',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'ExpressJs',
		color: 'gray',
		description: '',
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'FullPageJs',
		color: 'lightgreen',
		description: '',
		logo: Assets.Fullpage,
		name: 'FullPageJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Arduino',
		color: 'lightgreen',
		description: '',
		logo: Assets.Arduino,
		name: 'Ardunio',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Azure',
		color: 'blue',
		description: '',
		logo: Assets.azure,
		name: 'Azure',
		category: 'devops'
	}),
	
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
