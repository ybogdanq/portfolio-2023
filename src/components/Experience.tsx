import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { experience } from '../helpers/experience'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Experience: FC<Props> = ({ className, ...props }) => {
	return (
		<section className="mb-12" {...props}>
			<h1 className="text-[24px] sm:text-[30px] leading-9 font-semibold tracking-wide mb-3 sm:mb-6">
				Experience ✨
			</h1>
			<div className="[&>*+*]:mt-10">
				{experience.map(exp => (
					<article>
						<div className="mb-2 sm:mb-4 flex justify-start items-center gap-2 sm:gap-3">
							<h1 className="uppercase text-lg sm:text-2xl font-semibold sm:font-light">
								{exp.company}
							</h1>
							<span className="block h-4 w-[1px] bg-black"></span>
							<span className="text-xs sm:text-lg leading-5 font-light">{exp.date}</span>
						</div>

						{exp.description && (
							<p className="text-sm sm:text-lg sm:max-w-[90%] tracking-normal sm:tracking-wide mb-5 sm:mb-7">
								{exp.description}
							</p>
						)}

						{exp.list && (
							<ul className="text-sm sm:text-lg pl-4 list-disc [&>*]:leading-5 [&>*]:sm:leading-9 [&>*]:tracking-wide [&>*]:mb-2 [&>*]:sm:mb-0">
								{exp.list?.map(listItem => (
									<li>{listItem}</li>
								))}{' '}
							</ul>
						)}
					</article>
				))}
			</div>
		</section>
	)
}
