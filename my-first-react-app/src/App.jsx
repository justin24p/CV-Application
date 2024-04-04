import Personal from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";
import "./App.css";
import "./styles/resume.css";
import { useCallback, useState } from "react";
function App() {
    //personal
    const [personalData, setPersonalData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    const handlePersonChange = (e) => {
        const { name, value } = e.target;
        setPersonalData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };

    return (
        <div className="app">
            <div className="App">
                <Personal
                    personalData={personalData}
                    handlePersonalChange={handlePersonChange}
                ></Personal>
                <Education></Education>
                <Experience></Experience>
            </div>
            <div className="resume">
                <h2>{personalData.fullName}</h2>
                <ul>
                    {Object.keys(personalData).map((key) => {
                        if (key != "fullName") {
                            return <p key={key}>{personalData[key]}</p>;
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
