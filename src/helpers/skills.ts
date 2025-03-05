export interface ISkill {
	type: string
	items: string[]
}

export const skills: ISkill[] = [
	{
		type: 'Frameworks & Libs',
		items: ['React', 'Nest.js', 'Node', 'Express', 'SwiftUI']
	},
	{
		type: 'Styling',
		items: ['Tailwind', 'Shadcn', 'CSS', 'SCSS']
	},
	{
		type: 'DBs & ORMs',
		items: ['PostgreSQL', 'MongoDB', 'Redis', 'Mongoose', 'Prisma', 'TypeOrm']
	},
	{
		type: 'State managers',
		items: ['TanStack Query', 'Redux', 'Apollo GraphQl']
	},
	{
		type: 'Apps',
		items: ['GitHub', 'Jira', 'Notion', 'Slack', 'Figma']
	},
	{
		type: 'Environment',
		items: ['Visual Studio', 'Nvim', 'Docker', 'zsh']
	}
]
