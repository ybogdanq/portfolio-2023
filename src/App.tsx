import { AboutMe } from './components/AboutMe'
import { DeveloperInfo } from './components/DeveloperInfo'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
	return (
		<>
			<div className="mx-auto py-24 container">
				<DeveloperInfo />
				<AboutMe />
        <Skills />
        <Experience />
        <Projects />
			</div>
		</>
	)
}

export default App
