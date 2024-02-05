interface IExperience {
	company: string
	date: string
	description?: string
	list?: string[]
}

export const experience: IExperience[] = [
	{
		company: 'Monterail',
		date: 'Jan. 2024 - Present',
		description:
			'Monterail is a full-service software development company with 150+ experts on board delivering meaningful software for the fintech, proptech, wellness, and eCommerce sectors.'
	},
	{
		company: 'Freelance',
		date: 'Oct. 2023 - Jan. 2024',
		list: [
			'Participated in the projects as a part of multi-talented people.',
			'Develop one of the websites as a volunteer.',
			'Collaborated with the development, management & design teams to bring quality of development products to the most level.'
		]
	},
	{
		company: 'CRISP STUDIO',
		date: 'Mar. 2022 - Oct. 2023',
		description:
			'Development focused agency that specialises in creating advanced solutions for Shopify Plus platform. They offer services such as headless store development, 3rd party system integration, data migration and high-performance custom app development. CRISP is known for delivering high-quality, scalable, and reliable solutions tailored to the specific needs of each client. They create solutions that increase sales, improve customer experience and streamline business operations.',
		list: [
			'Led the development of an automation app aimed at streamlining the flow of outfit customization for customers.',
			'Implemented the flow of customization, including product selection, project management, and checkout processes.',
			'Developed a comprehensive dashboard to provide clients with real-time project insights and manage customization orders efficiently.',
			'Built a content management system (CMS) to allow easy updating and management of app content.',
			'Actively participated in code reviews, debugging, and troubleshooting to maintain high code quality standards.',
			'Collaborated with the design team to ensure a visually appealing and intuitive user interface.'
		]
	}
]
