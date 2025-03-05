import {
	BiLogoReact,
	BiLogoAws,
	BiLogoMongodb,
	BiLogoTypescript,
	BiLogoGithub,
	BiLogoNodejs
} from 'react-icons/bi'
import {
	SiNestjs,
	SiExpress,
	SiTailwindcss,
	SiSwift,
	SiFramer,
	SiMongodb,
	SiReact,
	SiDirectus,
	SiNodedotjs,
	SiPostgresql
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'
import { IconType } from 'react-icons'

export interface IProject {
	logo: string
	icons: IconType[]
	urls: { github?: string; website?: string } | null
}

export const projects: IProject[] = [
	{
		logo: './projects/beacon.svg',
		icons: [SiSwift, SiFramer, SiNestjs, SiMongodb],
		urls: {
			website: 'https://beaconwallet.app/'
		}
	},
	{
		logo: './projects/nomadlog.svg',
		icons: [SiReact, SiNestjs, SiMongodb, BiLogoAws],
		urls: {}
	},
	{
		logo: './projects/edgehunters.png',
		icons: [SiDirectus, BiLogoAws, SiNodedotjs, SiPostgresql],
		urls: {
			website: 'https://www.edgehunters.com/'
		}
	},
	{
		logo: './projects/gobik-custom.svg',
		icons: [BiLogoReact, SiExpress, BiLogoTypescript, BiLogoAws, BiLogoMongodb, BiLogoGithub],
		urls: null
	},
	{
		logo: './projects/survey.png',
		icons: [SiExpress, BiLogoNodejs, BiLogoReact, SiTailwindcss],
		urls: {
			website: 'https://survey-xi-nine.vercel.app/'
		}
	},
	{
		logo: './projects/cyrenovation.svg',
		icons: [BiLogoReact, SiTailwindcss, TbApi],
		urls: { website: 'https://cyrenovation.pro/' }
	}
]
