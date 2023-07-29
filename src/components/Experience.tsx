import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Experience: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[30px] leading-9 font-semibold tracking-wide mb-6">Experience ✨</h1>
			<div>
				<div className="mb-4 flex justify-start items-center gap-3">
					<h1 className="uppercase text-2xl font-light">Crisp studio</h1>
					<span className="block h-4 w-[1px] bg-black"></span>
					<span className="text-lg leading-5 font-light">Mar. 2022 - Present</span>
				</div>
				<p className="text-lg max-w-[90%] mb-7 tracking-wide">
					Ac nam leo mi pulvinar quam ullamcorper cras vestibulum sagittis. Velit arcu ullamcorper
					mollis quis in. Vel tristique sit varius posuere lectus mauris consectetur scelerisque.
					Vel sapien egestas donec ipsum est tincidunt diam adipiscing eu. Porttitor molestie porta
					proin eleifend blandit mattis enim
				</p>
				<ul className="text-lg pl-4 list-disc">
					<li className="leading-9 tracking-wide">
						Led the development of an automation app aimed at streamlining the flow of outfit
						customization for customers.
					</li>
					<li className="leading-9 tracking-wide">
						Implemented the flow of customization, including product selection, project management,
						and checkout processes.
					</li>
					<li className="leading-9 tracking-wide">
						Developed a comprehensive dashboard to provide clients with real-time project insights
						and manage customization orders efficiently.
					</li>
					<li className="leading-9 tracking-wide">
						Built a content management system (CMS) to allow easy updating and management of app
						content.
					</li>
					<li className="leading-9 tracking-wide">
						Actively participated in code reviews, debugging, and troubleshooting to maintain high
						code quality standards.
					</li>
					<li className="leading-9 tracking-wide">
						Collaborated with the design team to ensure a visually appealing and intuitive user
						interface.
					</li>
				</ul>
			</div>
		</div>
	)
}
