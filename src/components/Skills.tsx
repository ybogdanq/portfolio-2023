import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { skills } from '../helpers/skills'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Skills: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[30px] leading-9 font-semibold tracking-wide mb-6">Skills 💪</h1>
			<p className="text-lg max-w-[90%] mb-10 tracking-wide">
				Semper senectus amet sodales mauris facilisis justo ac adipiscing.
			</p>
			<div className="max-w-2xl grid grid-cols-2 gap-x-4 gap-y-10">
				{skills.map(({ type, items }) => (
					<div>
						<h2 className="mb-3 text-2xl">{type}</h2>
						<ul className="text-lg pl-4 list-disc">
							{items.map(skillItem => (
								<li className="leading-9">{skillItem}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}
