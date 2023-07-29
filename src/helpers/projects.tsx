import {
	BiLogoReact,
	BiLogoNodejs,
	BiLogoAws,
	BiLogoMongodb,
	BiLogoTypescript,
	BiLogoGithub
} from 'react-icons/bi'
import { IconType } from 'react-icons'

export interface IProject {
	logo: string
	icons: IconType[]
}

export const projects: IProject[] = [
	{
		logo: '',
		icons: [BiLogoReact, BiLogoNodejs, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub]
	},
	{
		logo: '',
		icons: [BiLogoReact, BiLogoNodejs, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub]
	},
	{
		logo: '',
		icons: [BiLogoReact, BiLogoNodejs, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub]
	},
	{
		logo: '',
		icons: [BiLogoReact, BiLogoNodejs, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub]
	},
]
