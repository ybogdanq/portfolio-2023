import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { FaHeart } from 'react-icons/fa'
import { projects } from '../helpers/projects'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Projects: FC<Props> = ({ className, ...props }) => {
	return (
		<div className="" {...props}>
			<h1 className="text-[30px] leading-9 font-semibold tracking-wide mb-6">Projects 🧩</h1>
			<div className="grid grid-cols-3 justify-center gap-x-5 gap-y-10">
				{projects.map(project => (
					<div className="cursor-pointer h-0 pt-[60%] bg-white border-[1px] border-solid border-black transition duration-150 shadow-[0px_1px_7px_1px_rgba(0,_0,_0,_0.25)] hover:shadow-[0px_2px_10px_5px_rgba(0,_0,_0,_0.25)] hover:scale-[1.005]">
						{/* {project.icons.map(Icon => (
							<>
								<Icon className="scale-150 text-black" />
							</>
						))} */}
					</div>
				))}
			</div>
		</div>
	)
}
