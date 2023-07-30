// @ts-ignore
import { Instagram, LinkedIn, Telegram, Github } from '../components/icons'

export interface ISocial {
	url: string
	name: string
	svg: JSX.Element
}

export const socials: ISocial[] = [
	{
		url: 'https://www.instagram.com/ybogdanq/',
		name: 'Instagram',
		svg: <Instagram />
	},
	{
		url: 'https://www.linkedin.com/in/ybogdanq/',
		name: 'LinkedIn',
		svg: <LinkedIn />
	},
	{
		url: 'https://t.me/ybogdanq',
		name: 'Telegram',
		svg: <Telegram />
	},
	{
		url: 'https://github.com/ybogdanq',
		name: 'Github',
		svg: <Github />
	}
]
