import Personal from "./components/personal";
import Resume from "./components/resume";
import { useState } from "react";
import EducationInput from "./components/education";
import ExperienceForm from "./components/experience";
import uniqid from "uniqid";
//css
import "./App.css";
import "./styles/navigation.css";
import "./styles/resume.css";

function App() {
    // we have to make each ones of these arrays
    // then we have a function that when experience plus is clicked it adds a new blank obj into array
    // keeping that connection between resume and experience comoponenet
    // if experience save button is clicked the we call some function in here to actually append the permantly
    // then when experience + is clicked again we create a new obj and push it into array
    // the hard thing will be making sure when we click on the obk later down it opens the correcty assicaton form
    // we probaly need uniqueid
    //personal Data
    const [personalData, setPersonalData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    // Education Data
    const [educationData, setEducationData] = useState([]);

    //TESTING

    // educatio generator
    const addEducation = () => {
        setEducationData((prevEducationData) => [
            ...prevEducationData,
            {
                school: "",
                degree: "",
                startDate: "",
                endDate: "",
                area: "",
            },
        ]);
    };
    //handleEducation aka ShowForm
    const handleEducation = () => {
        setShowForm(true);
    };
    function educationHelperFunction() {
        addEducation();
        handleEducation();
    }
    //TESTING
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
                                {!showform && (
                                    <button onClick={educationHelperFunction}>
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
                                    ></ExperienceForm>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Resume
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
