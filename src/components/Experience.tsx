import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Experience: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="mb-12" {...props}>
			<h1 className="text-[24px] sm:text-[30px] leading-9 font-semibold tracking-wide mb-3 sm:mb-6">
				Experience ✨
			</h1>
			<div>
				<div className="mb-2 sm:mb-4 flex justify-start items-center gap-2 sm:gap-3">
					<h1 className="uppercase text-lg sm:text-2xl font-semibold sm:font-light">
						Crisp studio
					</h1>
					<span className="block h-4 w-[1px] bg-black"></span>
					<span className="text-xs sm:text-lg leading-5 font-light">Mar. 2022 - Present</span>
				</div>
				<p className="text-sm sm:text-lg sm:max-w-[90%] tracking-normal sm:tracking-wide mb-5 sm:mb-7">
					Development focused agency that specialises in creating advanced
					solutions for Shopify Plus platform. They offer services such as headless store
					development, 3rd party system integration, data migration and high-performance custom app
					development. CRISP is known for delivering high-quality, scalable, and reliable solutions
					tailored to the specific needs of each client. They create solutions that increase sales,
					improve customer experience and streamline business operations.
				</p>
				<ul className="text-sm sm:text-lg pl-4 list-disc [&>*]:leading-5 [&>*]:sm:leading-9 [&>*]:tracking-wide [&>*]:mb-2 [&>*]:sm:mb-0">
					<li>
						Led the development of an automation app aimed at streamlining the flow of outfit
						customization for customers.
					</li>
					<li>
						Implemented the flow of customization, including product selection, project management,
						and checkout processes.
					</li>
					<li>
						Developed a comprehensive dashboard to provide clients with real-time project insights
						and manage customization orders efficiently.
					</li>
					<li>
						Built a content management system (CMS) to allow easy updating and management of app
						content.
					</li>
					<li>
						Actively participated in code reviews, debugging, and troubleshooting to maintain high
						code quality standards.
					</li>
					<li>
						Collaborated with the design team to ensure a visually appealing and intuitive user
						interface.
					</li>
				</ul>
			</div>
		</div>
	)
}
