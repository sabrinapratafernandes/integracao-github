import About from "./About";
import Blocks from "./Blocks";
import Footer from "./Footer";
import Highlights from "./Highlights";
import Knowledges from "./Knowledges";
import Me from "./Me";
import Projects from "./Projects";
import Resume from "./Resume";

const appStyle = {
  maxWidth: '100vw',
  overflowY: 'auto',
  overflowX: 'hidden',
  background: 'linear-gradient(90deg, rgba(68,35,101,1) 30%, rgba(108,63,177,1) 100%)',
  padding: '2%',
  
}

function App() {
  return (
    <div style={appStyle} className="app">
      <Me/>
      <About/>
      <Resume/>
      <Blocks/>
      <Highlights/>
      <Knowledges/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
