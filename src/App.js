import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home className="home" />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
