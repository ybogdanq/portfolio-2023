import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DeveloperInfo: FC<Props> = ({ className, ...props }) => {
	return (
		<section className="flex items-center gap-10 mb-8 sm:mb-16" {...props}>
			<div className="hidden sm:block relative w-[155px] h-[155px]">
				<img className="object-cover rounded-md w-full h-full" src="./Developer.jpg" alt="" />
			</div>
			<div>
				<h1 className="text-3xl sm:text-4xl mb-1 sm:mb-2">
					Bohdan <br className="block sm:hidden" /> Yereshchenko 🧑🏻‍💻
				</h1>
				<p className="text-xl sm:text-2xl font-light">Full-stack engineer</p>
			</div>
		</section>
	)
}
