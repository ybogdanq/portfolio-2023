import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DeveloperInfo: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="grid grid-cols-[155px_1fr] gap-10 items-center mb-16" {...props}>
			<div className="bg-neutral-200 w-full h-0 pt-[100%] rounded-full"></div>
			<div>
				<h1 className="text-4xl mb-2">Bohdan Yereshchenko 🧑🏻‍💻</h1>
				<p className="text-2xl font-light">Full-stack developer</p>
			</div>
		</div>
	)
}
