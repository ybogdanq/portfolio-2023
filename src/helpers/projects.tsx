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
}

export const projects: IProject[] = [
	{
		logo: './GobikCustomsLogo.png',
		icons: [BiLogoReact, SiExpress, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub]
	},
	{
		logo: './RenovationApp.png',
		icons: [BiLogoReact, SiNestjs, SiTailwindcss, BiLogoTypescript, BiLogoPostgresql, BiLogoGithub]
	},
	{
		logo: './WeatherApp.png',
		icons: [BiLogoReact, BiLogoSass, BiLogoTypescript, BiLogoGithub, TbApi]
	},
	{
		logo: './MovieaLogo.png',
		icons: [BiLogoReact, BiLogoVuejs, BiLogoSass, BiLogoGithub, TbApi]
	},
	{
		logo: './SubscriptionAppLogo.png',
		icons: [BiLogoVuejs, BiLogoSass, BiLogoGithub]
	}
]
