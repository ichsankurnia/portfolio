import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
// import Stack from "./components/Stack";
import Work from "./components/Work";
import visitorInformation, { inputVisitor, validateVisitorTime } from "./content/visitorInformation";

function App() {
  useEffect(() => {
    async function fetchVisitor() {
      const visitor = await visitorInformation()
      console.log(visitor)

      if (validateVisitorTime()) {
        inputVisitor('https://ories.goes2nobel.com/dbmysql/visitor-portfolio-input.php', visitor)
          .then(res => {
            console.log(res)
          })
      }
    }

    // console.log(process.env.npm_config_local_prefix)
    fetchVisitor()
  }, [])

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