import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
// import Stack from "./components/Stack";
import Work from "./components/Work";

function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<About />
			{/* <Stack /> */}
			<Work />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
