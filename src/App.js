import Blocks from "./Blocks";
import Footer from "./Footer";
import Me from "./Me";
import Projects from "./Projects";

const appStyle = {
  maxWidth: '100vw',
  overflowY: 'auto',
  overflowX: 'hidden',
  background: '#160040',
  padding: '2%',
  color: 'white',
  fontStyle: 'italic',
  
}

function App() {
  return (
    <div style={appStyle} className="app">
      <Me/>
      <Blocks/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
