import "../styles/resume.css";
import EducationResumeContent from "./educationresume";

export default function Resume({
    personalData,
    educationData,
    experienceData,
    showform,
    showform2,
    education,
}) {
    return (
        <div className="resume">
            <div className="header">
                <h2>{personalData.fullName}</h2>
                <div className="contact-info">
                    {Object.keys(personalData).map((obj) => {
                        if (obj !== "fullName") {
                            return <p key={obj}>{personalData[obj]}</p>;
                        }
                    })}
                </div>
            </div>
            <div className="educationResume">
                {(showform || education.length > 0) && <h1>Education</h1>}
                <div className="educationContent">
                    {Object.keys(educationData).map((obj) => {
                        if (obj !== "fullName") {
                            return <p key={obj}>{educationData[obj]}</p>;
                        }
                    })}
                </div>
            </div>
            <div className="experience">
                {showform2 && <h1>experience</h1>}
                <h2>{experienceData.companyName}</h2>
                <div className="contact-info">
                    {Object.keys(experienceData).map((obj) => {
                        if (obj !== "fullName") {
                            return <p key={obj}>{experienceData[obj]}</p>;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
