import Navbar from "./components/Navbar/Navbar";
import PainelCentral from "./components/PainelCentral/PainelCentral";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <PainelCentral></PainelCentral>
      </main>
    </div>
  );
}

export default App;
