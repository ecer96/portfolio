import "./App.css";
import { Navbar } from "./Components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Home } from "./Components/Home";
import { Projects } from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Components/Contact";

function App() {
    return (
        <div className="App bg-neutral-100">
            <Router>
            <Navbar/>
                <Routes>
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/projects" element={<Projects/>} />
                    <Route  path="/contact" element={<Contact/>} />
              
                </Routes>
            </Router>
        </div>
    );
}

export default App;
