import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { skills } from '../helpers/skills'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Skills: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[24px] sm:text-[30px] leading-9 font-semibold tracking-wide mb-3 sm:mb-6">
				Skills 💪
			</h1>
			<p className="text-sm sm:text-lg max-w-[90%] tracking-normal sm:tracking-wide mb-5 sm:mb-8">
				Semper senectus amet sodales mauris facilisis justo ac adipiscing.
			</p>
			<div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-10">
				{skills.map(({ type, items }) => (
					<div>
						<h2 className="mb-1 sm:mb-3 text-md sm:text-2xl font-bold sm:font-normal">{type}</h2>
						<ul className="text-sm sm:text-lg pl-0 sm:pl-4 list-none sm:list-disc">
							{items.map(skillItem => (
								<li className="leading-5 sm:leading-7">{skillItem}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}
