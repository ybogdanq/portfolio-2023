interface IExperience {
	company: string
	date: string
	description?: string
	list?: string[]
}

export const experience: IExperience[] = [
	{
		company: 'Vela Ventures',
		date: 'Apr. 2024 - Present',
		description:
			'Vela Ventures drives the future of decentralized, trustless AI applications on AO. With a focus on innovation and scalability, the next generation of AI-driven solutions is built with transparency and security at the core.'
	},
	{
		company: 'Monterail',
		date: 'Jan. 2024 - Present',
		description:
			'Monterail is a full-service software development company with 150+ experts on board delivering meaningful software for the fintech, proptech, wellness, and eCommerce sectors.'
	},
	{
		company: 'CRISP STUDIO',
		date: 'Mar. 2022 - Dec. 2023',
		description:
			'CRISP STUDIO specializes in advanced Shopify Plus solutions, including headless store development and custom app creation. With a focus on performance, scalability, and tailored experiences, the goal is to drive sales, enhance customer engagement, and optimize business operations.'
	}
]
