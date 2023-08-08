import { DetailedHTMLProps, FC, HTMLAttributes, useCallback, useRef } from 'react'
import { IProject, projects } from '../helpers/projects'
import useWindowWidth from '../utils/useWindowWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Projects: FC<Props> = ({ className, ...props }) => {
	const windowWidth = useWindowWidth()

	const sliderRef = useRef(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		//@ts-ignore
		sliderRef.current?.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		//@ts-ignore
		sliderRef.current?.swiper.slideNext()
	}, [])

	const projectEl = ({ logo, icons, urls }: IProject) => (
		<div className="relative h-0 pt-[60%] bg-white border-[1px] border-solid border-black transition duration-150 sm:shadow-[0px_1px_7px_1px_rgba(0,_0,_0,_0.25)] sm:hover:shadow-[0px_2px_10px_5px_rgba(0,_0,_0,_0.25)] hover:scale-[1.005]">
			<div className="w-full h-full absolute inset-0 flex gap-2 items-center justify-center opacity-0 hover:opacity-100 transition-all duration-200 bg-black/[.45] text-white z-20 [&>*]:font-semibold [&>*]:stroke-black [&>*]:tracking-wider [&>*]:drop-shadow-[0px_0px_2px_rgba(0,0,0,1)]">
				{urls?.github && <a href={urls.github}>Github</a>}
				{urls?.website && <a href={urls.website}>Website</a>}
				{!urls?.github && !urls?.website && <span>App is private</span>}
			</div>
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

	return (
		<div className="lg:max-w-[90%]" {...props}>
			<h1 className="text-[24px] sm:text-[30px] leading-9 font-semibold tracking-wide mb-3 sm:mb-6">
				Projects 🧩
			</h1>
			{windowWidth > 768 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-5 gap-y-7">
					{projects.map(projectEl)}
				</div>
			) : (
				<div className="relative">
					<div className="absolute -left-2 top-[50%] translate-y-[-50%]" onClick={handlePrev}>
						<MdOutlineKeyboardArrowLeft className="scale-[1.8]" />
					</div>
					<div className="absolute -right-2 top-[50%] translate-y-[-50%]" onClick={handleNext}>
						<MdOutlineKeyboardArrowRight className="scale-[1.8]" />
					</div>
					<Swiper
						ref={sliderRef}
						className="relative cursor-grab mb-12 mx-auto max-w-[90%]"
						spaceBetween={0}
						slidesPerView={1}
						onSwiper={swiper => console.log(swiper)}
					>
						{projects.map(props => (
							<SwiperSlide>{projectEl(props)}</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	)
}
