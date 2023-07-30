import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { IProject, projects } from '../helpers/projects'
import useWindowWidth from '../utils/useWindowWidth'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Projects: FC<Props> = ({ className, ...props }) => {
	const windowWidth = useWindowWidth()
	const projectEl = ({ logo, icons }: IProject) => (
		<div className="cursor-pointer relative h-0 pt-[60%] bg-white border-[1px] border-solid border-black transition duration-150 shadow-[0px_1px_7px_1px_rgba(0,_0,_0,_0.25)] hover:shadow-[0px_2px_10px_5px_rgba(0,_0,_0,_0.25)] hover:scale-[1.005]">
			<div className="w-full h-full absolute inset-0 flex items-end justify-center">
				<img
					className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[80%]"
					src={logo}
					alt="Project logo"
				/>
				<div className="flex items-center p-2">
					{icons.map(Icon => (
						<Icon className="block scale-[1.3] mx-1 text-black" />
					))}
				</div>
			</div>
		</div>
	)

	const projectsElList =
		windowWidth > 768
			? projects.map(projectEl)
			: projects.map(props => <SwiperSlide>{projectEl(props)}</SwiperSlide>)
	return (
		<div className="lg:max-w-[90%]" {...props}>
			<h1 className="text-[30px] leading-9 font-semibold tracking-wide mb-6">Projects 🧩</h1>
			{windowWidth > 768 ? (
				<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 justify-center gap-x-5 gap-y-7">
					{projectsElList}
				</div>
			) : (
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{projectsElList}
				</Swiper>
			)}
		</div>
	)
}
