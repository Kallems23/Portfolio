import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home className="home" />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
