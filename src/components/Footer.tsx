import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { socials } from '../helpers/socials'
//@ts-ignore
import { Instagram } from './icons'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mt-24 py-5 flex items-center justify-between max-w-[90%]" {...props}>
			<div>
				{socials.map(social => (
					<a href={social.url}>
						<span className="relative group mr-4">
							<span className="opacity-100 group-hover:opacity-0 transition duration-300">
								{social.name}
							</span>
							<span className="absolute flex items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
								{social.svg}
							</span>
						</span>
					</a>
				))}
			</div>
			<div className="flex items-center">
				<span className="mr-2">Designed by </span>
				<a href={'https://www.instagram.com/tonigtem/'}>
					<span className="relative group mr-4">
						<span className="opacity-100 group-hover:opacity-0 transition duration-300">
              Anastasiia Karas
						</span>
						<span className="absolute flex items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
							<Instagram />
						</span>
					</span>
				</a>
			</div>
		</div>
	)
}
