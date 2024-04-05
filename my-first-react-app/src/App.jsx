import Personal from "./components/personal";
import Experience from "./components/experience";
import Resume from "./components/resume";
import { useState } from "react";
import EducationInput from "./components/education";
//css
import "./App.css";
import "./styles/resume.css";

function App() {
    //personal Data
    const [personalData, setPersonalData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    // Education Data
    const [educationData, setEducationData] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        area: "",
    });
    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducationData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };

    const handlePersonChange = (e) => {
        const { name, value } = e.target;
        setPersonalData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };
    // Toggle handler for education could be refactored to not use state for button only form
    const [showbutton, setShowButton] = useState(false);
    const [showform, setShowForm] = useState(false);

    const toggleButton = () => {
        setShowButton(!showbutton);
    };
    const handeEducation = () => {
        setShowForm(true);
        setShowButton(false);
    };

    return (
        <div className="app">
            <div className="App">
                <Personal
                    personalData={personalData}
                    handlePersonalChange={handlePersonChange}
                ></Personal>
                <Experience></Experience>
                <div className="education">
                    <h1>Education</h1>
                    <button onClick={toggleButton}>^</button>
                    {showbutton && (
                        <button onClick={handeEducation}>Education +</button>
                    )}
                    {showform && (
                        <EducationInput
                            educationData={educationData}
                            handleEducationChange={handleEducationChange}
                        ></EducationInput>
                    )}
                </div>
            </div>
            <Resume
                personalData={personalData}
                educationData={educationData}
            ></Resume>
        </div>
    );
}

export default App;
//the current education etc experience will handle if the componenet is shown or not
// however we will declare the state of education and experince forms in here
// so we can easily pass the state to our main resume
