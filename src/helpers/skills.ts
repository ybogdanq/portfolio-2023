export interface ISkill {
	type: string
	items: string[]
}

export const skills: ISkill[] = [
	{
		type: 'Frameworks & Libs',
		items: ['React', 'Next.js', 'Vue 2', 'Node', 'Nest.js', 'Express', 'Koa']
	},
	{
		type: 'Styling',
		items: ['CSS', 'SCSS', 'Tailwind', 'ChakraUI', 'Bootstrap']
	},
	{
		type: 'Databases and ORMs',
		items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Mongoose', 'Prisma', 'TypeOrm']
	},
	{
		type: 'State managers',
		items: ['Redux', 'MobX', 'VueX', 'TanStack Query', 'GraphQl']
	},
	{
		type: 'Apps',
		items: ['Jira', 'ClickUp', 'GitHub', 'Slack', 'Figma', 'Photoshop']
	},
	{
		type: 'Environment',
		items: ['Visual Studio', 'Git Bash', 'Command', 'Prompt', 'Docker']
	}
]
