import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DeveloperInfo: FC<Props> = ({ className, ...props }) => {
	return (
		<section
			className="grid grid-cols-1 sm:grid-cols-[155px_1fr] gap-10 items-center mb-8 sm:mb-16"
			{...props}
		>
			<div className="hidden sm:block w-full h-0 pt-[100%] rounded-full overflow-hidden relative">
				<img className="absolute inset-0" src="./Developer.jpg" alt="" />
			</div>
			<div>
				<h1 className="text-3xl sm:text-4xl mb-1 sm:mb-2">
					Bohdan <br className="block sm:hidden" /> Yereshchenko 🧑🏻‍💻
				</h1>
				<p className="text-xl sm:text-2xl font-light">Full-stack developer</p>
			</div>
		</section>
	)
}
