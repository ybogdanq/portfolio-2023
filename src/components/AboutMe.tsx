import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AboutMe: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[24px] sm:text-[30px] leading-9 font-semibold tracking-wide mb-3 sm:mb-6">
				About me 📝
			</h1>
			<p className="text-sm sm:text-lg sm:max-w-[90%] tracking-normal sm:tracking-wide">
				Currently, Bohdan&apos;s responsibilities are building and maintaining either new projects
				or existing ones, working with the team to expand and integrate proper solutions into code
				bases, solving business problems, and automating its workflow.
				<br />
				<br />
				He uses modern web technologies such as React, Node.js, Next, Nest, Tailwind, and others.
				Along with learning new ones during free time.
				<br />
				<br />
				But nothing stops only development itself, Bohdan always trying to get better in all the
				areas around him.{' '}
				<span className='font-semibold'>
					The main focus is to live interesting life surrounding him with interesting and cool
					people.
				</span>
			</p>
		</div>
	)
}
