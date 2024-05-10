import Personal from "./components/personal";
import Resume from "./components/resume";
import { useState } from "react";
import EducationInput from "./components/education";
import ExperienceForm from "./components/experience";
import EducationButton from "./components/educationcontainer";
import "./App.css";
import "./styles/navigation.css";
import "./styles/resume.css";
import { v4 as uuidv4 } from "uuid";

function App() {
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
        location: "",
        id: "",
    });

    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const saveEducation = () => {
        setEducationData((educationData.id = uuidv4()));
        setEducation((prevEducation) => [...prevEducation, educationData]);
        setShowForm(false);
        clearEducation();
    };
    const saveExperience = () => {
        setExperience((prevExperience) => [...prevExperience, experienceData]);
        setShowForm2(false);
        clearExperience();
    };

    const handleEducation = () => {
        setShowForm(true);
    };
    //TESTING
    const [experienceData, setExperienceData] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
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
    const clearEducation = () => {
        setEducationData({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            area: "",
        });
    };
    const clearExperience = () => {
        setExperienceData({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            area: "",
            description: "",
        });
    };
    function cancelEducation() {
        clearEducation();
        setShowForm();
    }
    function cancelExperience() {
        clearExperience();
        setShowForm2();
    }
    // Toggle handler for education
    // education button
    const [showdiv, setShowDiv] = useState(false);
    const [showform, setShowForm] = useState(false);
    //! converts from true to false
    const toggleDiv = () => {
        setShowDiv(!showdiv);
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
    const tester = (id) => {
        const selectedEducation = education.find((edu) => edu.id === id);
        setEducationData(selectedEducation);
        handleEducation();
    };
    return (
        <div>
            <div className="nav">
                <div className="logo">
                    <p>CV</p>
                    <p>-Lite</p>
                </div>
                <div className="toggle">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="togglebutton"></label>
                </div>
            </div>
            <div className="app">
                <div className="sidemenu">
                    <Personal
                        personalData={personalData}
                        handlePersonalChange={handlePersonChange}
                    ></Personal>
                    <div className="education">
                        <button onClick={toggleDiv}>Education ˅</button>
                        {showdiv && (
                            <div>
                                {education.length > 0 && (
                                    <EducationButton
                                        tester={tester}
                                        education={education}
                                    ></EducationButton>
                                )}
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
                                        cancelEducation={cancelEducation}
                                        saveEducation={saveEducation}
                                    ></EducationInput>
                                )}
                            </div>
                        )}
                    </div>
                    <div className=" experience">
                        <button onClick={toggleDiv2}>Experience ˅</button>
                        {showdiv2 && (
                            <div>
                                {!showform2 && (
                                    <button onClick={handleExperience}>
                                        Experience +
                                    </button>
                                )}
                                {showform2 && (
                                    <ExperienceForm
                                        experienceData={experienceData}
                                        handleExperienceChange={
                                            handleExperienceChange
                                        }
                                        cancelExperience={cancelExperience}
                                        saveExperience={saveExperience}
                                    ></ExperienceForm>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Resume
                    education={education}
                    experience={experience}
                    personalData={personalData}
                    educationData={educationData}
                    experienceData={experienceData}
                    showform2={showform2}
                    showform={showform}
                ></Resume>
            </div>
        </div>
    );
}

export default App;
