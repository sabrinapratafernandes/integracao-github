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
  background: '#dcdcdc',
  padding: '2%',
  fontStyle: 'italic',
  
}

function App() {
  return (
    <div style={appStyle} className="app">
      <Me/>
      <Blocks/>
      <About/>
      <Resume/>
      <Highlights/>
      <Knowledges/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
