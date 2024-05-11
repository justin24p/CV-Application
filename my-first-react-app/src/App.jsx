import Personal from "./components/personal";
import Resume from "./components/resume";
import { useState } from "react";
import EducationInput from "./components/education";
import ExperienceForm from "./components/experience";
import EducationButton from "./components/educationcontainer";
import ExperienceButton from "./components/experiencecontainer";
import TempEducationForm from "./components/tempeducation";
import "./App.css";
import "./styles/navigation.css";
import "./styles/resume.css";
import { v4 as uuidv4 } from "uuid";
import TempExperienceForm from "./components/tempexperience";

function App() {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [personalData, setPersonalData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const [educationData, setEducationData] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        id: "",
    });
    const [tempEducationForm, setTempEducationForm] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        id: "",
    });
    const [tempExperienceForm, setTempExperienceForm] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        id: "",
    });
    const [experienceData, setExperienceData] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        id: "",
    });
    const saveEducation = () => {
        setEducationData((educationData.id = uuidv4()));
        setEducation((prevEducation) => [...prevEducation, educationData]);
        setShowForm(false);
        clearEducation();
    };
    const saveExperience = () => {
        setExperienceData((experienceData.id = uuidv4()));
        setExperience((prevExperience) => [...prevExperience, experienceData]);
        setShowForm2(false);
        clearExperience();
    };
    const handleEducation = () => {
        setShowForm(true);
    };
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
    const clearTempEducation = () => {
        setTempEducationForm({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            id: "",
        });
    };
    const clearTempExperience = () => {
        setTempExperienceForm({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: "",
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
    function cancelTempEducation() {
        setShowTempForm(false);
    }
    function cancelTempExperience() {
        setShowTempForm2(false);
    }
    const [showdiv, setShowDiv] = useState(false);
    const [showform, setShowForm] = useState(false);

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
    const handleEducationArrayChange = (e) => {
        const { name, value } = e.target;
        setTempEducationForm((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
        const element = education.find(
            (edu) => edu.id === tempEducationForm.id,
        );
        const index = education.indexOf(element);
        const updatedEducation = [...education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        };
        setEducation(updatedEducation);
    };
    const handleExperienceArrayChange = (e) => {
        const { name, value } = e.target;
        setTempExperienceForm((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
        const element = experience.find(
            (exp) => exp.id === tempExperienceForm.id,
        );
        const index = experience.indexOf(element);
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [name]: value,
        };
        setExperience(updatedExperience);
    };
    // when a button is clicked
    const [showTempForm, setShowTempForm] = useState(false);

    const tester = (id) => {
        const selectedEducation = education.find((edu) => edu.id === id);
        setTempEducationForm(selectedEducation);
        setShowTempForm(true);
    };
    const enableTempExperienceForm = (id) => {
        const selectedExperience = experience.find((exp) => exp.id === id);
        setTempExperienceForm(selectedExperience);
        setShowTempForm2(true);
    };
    const deleteEducationObj = () => {
        const id = tempEducationForm.id;
        const index = education.findIndex((edu) => edu.id === id);

        const updatedEducation = [...education];
        updatedEducation.splice(index, 1); // Remove 1 element at the found index
        setEducation(updatedEducation);
        clearTempEducation();
        setShowTempForm(false);
    };
    const deleteExperienceObj = () => {
        const id = tempExperienceForm.id;
        const index = experience.findIndex((exp) => exp.id === id);

        const updatedExperience = [...experience];
        updatedExperience.splice(index, 1); // Remove 1 element at the found index
        setExperience(updatedExperience);
        clearTempExperience();
        setShowTempForm2(false);
    };
    const [showTempForm2, setShowTempForm2] = useState(false);

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
                                {education.length > 0 &&
                                    !showTempForm &&
                                    !showform && (
                                        <EducationButton
                                            tester={tester}
                                            education={education}
                                        ></EducationButton>
                                    )}
                                {!showform && !showTempForm && (
                                    <button onClick={handleEducation}>
                                        Education +
                                    </button>
                                )}
                                {showTempForm && (
                                    <TempEducationForm
                                        tempEducationForm={tempEducationForm}
                                        handleEducationArrayChange={
                                            handleEducationArrayChange
                                        }
                                        cancelTempEducation={
                                            cancelTempEducation
                                        }
                                        deleteEducationObj={deleteEducationObj}
                                    ></TempEducationForm>
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
                                {experience.length > 0 &&
                                    !showTempForm2 &&
                                    !showform2 && (
                                        <ExperienceButton
                                            experience={experience}
                                            enableTempExperienceForm={
                                                enableTempExperienceForm
                                            }
                                        ></ExperienceButton>
                                    )}
                                {!showform2 && !showTempForm2 && (
                                    <button onClick={handleExperience}>
                                        Experience +
                                    </button>
                                )}
                                {showTempForm2 && (
                                    <TempExperienceForm
                                        tempExperienceForm={tempExperienceForm}
                                        handleExperienceArrayChange={
                                            handleExperienceArrayChange
                                        }
                                        cancelTempExperience={
                                            cancelTempExperience
                                        }
                                        deleteExperienceObj={
                                            deleteExperienceObj
                                        }
                                    ></TempExperienceForm>
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
