import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { socials } from '../helpers/socials'
//@ts-ignore
import { Instagram } from './icons'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer: FC<Props> = ({ className, ...props }) => {
	return (
		<div
			className="sm:container sm:mx-auto px-4 sm:px-6 bg-white sm:bg-transparent w-full mt-12 sm:mt-24 py-5"
			{...props}
		>
			<div className="flex items-center justify-between flex-col sm:flex-row sm:max-w-[90%]">
				<div className="mb-2 sm:mb-0">
					{socials.map(social => (
						<a href={social.url}>
							<span className="relative group mr-2 sm:mr-4">
								<span className="opacity-100 group-hover:opacity-0 transition duration-300 underline underline-offset-2 text-sm sm:text-md">
									{social.name}
								</span>
								<span className="absolute flex items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transition duration-300 scale-50 group-hover:scale-75 sm:scale-75 sm:group-hover:scale-100">
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
							<span className="text-sm sm:text-md opacity-100 group-hover:opacity-0 transition duration-300 underline underline-offset-2">
								Anastasiia Karas
							</span>
							<span className="absolute flex items-center justify-center inset-0 opacity-0 group-hover:opacity-100 transition duration-300 scale-50 group-hover:scale-75 sm:scale-75 sm:group-hover:scale-100">
								<Instagram />
							</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	)
}
