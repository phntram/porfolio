
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
	return (
		<>
			<Hero />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
}

export default App;
