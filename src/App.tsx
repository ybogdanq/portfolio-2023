import { useInView } from 'react-intersection-observer'
import { AboutMe } from './components/AboutMe'
import { DeveloperInfo } from './components/DeveloperInfo'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import cn from "classnames"

function App() {
	const { inView, ref } = useInView({
		triggerOnce: true,
		threshold: 0
	})
	return (
		<>
			<div
				ref={ref}
				className={cn(
					'mx-auto px-4 sm:px-6 pt-7 sm:pt-17 md:pt-20 lg:pt-24 container flex flex-col opacity-0 transition-all duration-1000',
					{
						'opacity-100': inView
					}
				)}
			>
				<div className="flex-1">
					<DeveloperInfo />
					<AboutMe />
					<Skills />
					<Experience />
					<Projects />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App
