import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Computer Application',
		description: '',
		location: 'Vadodara,Gujarat,India',
		logo: Assets.MSU,
		name: '',
		organization: 'Maharaja Sayajirao University',
		period: { from: new Date(2022, 5, 1), to: new Date(2025, 6, 1) },
		shortDescription: '',
		slug: 'MSU',
		subjects: ['Python','C','C++','Java','Sql','Servlet','JSP','Shell']
	},
	{
		degree: 'Higher Secondry (Commerce)',
		description: '',
		location: 'Vdodara,Gujarat,India',
		logo: Assets.Alembic,
		name: '',
		organization: 'Alembic Vidyalay',
		period: { from: new Date(2019, 0, 1) ,to: new Date(2021, 6, 1) },
		shortDescription: '',
		slug: 'Alembic',
		subjects: ['BA', 'Accounts', 'Stat', 'SPCC','Economics']
	}
];

export const title = 'Education';
