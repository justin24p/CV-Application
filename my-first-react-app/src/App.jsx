import SideMenu from "./components/sidemenu";
import Personal from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";
import "./App.css";
import "./styles/resume.css";
function App() {
    return (
        <div className="app">
            <div className="App">
                <SideMenu>
                    <Personal></Personal>
                    <Education></Education>
                    <Experience></Experience>
                </SideMenu>
            </div>
            <div className="resume">
                <h2>Resume</h2>
            </div>
        </div>
    );
}

export default App;
