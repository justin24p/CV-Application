import Personal from "./components/personal";
import Resume from "./components/resume";
import { useState } from "react";
import EducationInput from "./components/education";
import ExperienceForm from "./components/experience";
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
    // Experience Data
    const [experienceData, setExperienceData] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        area: "",
        description: "",
    });
    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setExperienceData((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };
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
    // Toggle handler for education
    // education button
    const [showdiv, setShowDiv] = useState(false);
    const [showform, setShowForm] = useState(false);
    //! converts from true to false
    const toggleDiv = () => {
        setShowDiv(!showdiv);
    };
    const handleEducation = () => {
        setShowForm(true);
    };
    // Toggle handler for experience
    const [showdiv2, setShowDiv2] = useState(false);
    const [showform2, setShowForm2] = useState(false);

    const toggleDiv2 = () => {
        setShowDiv2(!showdiv2);
    };
    const handleExperience = () => {
        setShowForm2(true);
    };
    return (
        <div className="app">
            <div className="App">
                <Personal
                    personalData={personalData}
                    handlePersonalChange={handlePersonChange}
                ></Personal>
                <div className="experience">
                    <h1>Experience</h1>
                    <button onClick={toggleDiv2}>^</button>
                    {showdiv2 && (
                        <div>
                            {!showform2 && (
                                <button onClick={handleExperience}>
                                    Education +
                                </button>
                            )}
                            {showform2 && (
                                <ExperienceForm
                                    experienceData={experienceData}
                                    handleExperienceChange={
                                        handleExperienceChange
                                    }
                                ></ExperienceForm>
                            )}
                        </div>
                    )}
                </div>
                <div className="education">
                    <h1>Education</h1>
                    <button onClick={toggleDiv}>^</button>
                    {showdiv && (
                        <div>
                            {!showform && (
                                <button onClick={handleEducation}>
                                    Education +
                                </button>
                            )}
                            {showform && (
                                <EducationInput
                                    educationData={educationData}
                                    handleEducationChange={
                                        handleEducationChange
                                    }
                                ></EducationInput>
                            )}
                        </div>
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
