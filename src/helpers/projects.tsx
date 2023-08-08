import {
	BiLogoReact,
	BiLogoAws,
	BiLogoMongodb,
	BiLogoTypescript,
	BiLogoGithub,
	BiLogoPostgresql,
	BiLogoSass,
	BiLogoVuejs
} from 'react-icons/bi'
import { SiNestjs, SiExpress, SiTailwindcss } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { IconType } from 'react-icons'

export interface IProject {
	logo: string
	icons: IconType[]
	urls: { github?: string; website?: string } | null
}

export const projects: IProject[] = [
	{
		logo: './GobikCustomsLogo.png',
		icons: [BiLogoReact, SiExpress, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub],
		urls: null
	},
	{
		logo: './RenovationApp.png',
		icons: [BiLogoReact, SiNestjs, SiTailwindcss, BiLogoTypescript, BiLogoPostgresql, BiLogoGithub],
		urls: {
			website: 'https://uni-renovation.vercel.app/',
			github: 'https://github.com/ybogdanq/uni-renovation'
		}
	},
	{
		logo: './WeatherApp.png',
		icons: [BiLogoReact, BiLogoSass, BiLogoTypescript, BiLogoGithub, TbApi],
		urls: {
			github: 'https://github.com/ybogdanq/WeatherApp-R',
			website: 'https://ybogdanq.github.io/WeatherApp-R/'
		}
	},
	{
		logo: './MovieaLogo.png',
		icons: [BiLogoReact, BiLogoVuejs, BiLogoSass, BiLogoGithub, TbApi],
		urls: {
			website: 'https://ybogdanq.github.io/MoviesApp/',
			github: 'https://github.com/ybogdanq/MoviesApp'
		}
	},
	{
		logo: './SubscriptionAppLogo.png',
		icons: [BiLogoVuejs, BiLogoSass, BiLogoGithub],
		urls: {
			github: 'https://github.com/ybogdanq/SubsApp',
			website: 'https://ybogdanq.github.io/SubsApp/'
		}
	}
]
