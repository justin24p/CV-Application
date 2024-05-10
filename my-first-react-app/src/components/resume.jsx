import "../styles/resume.css";
import EducationResumeContent from "./educationresume";
import ExperienceResumeContent from "./experienceresume";

export default function Resume({
    personalData,
    educationData,
    experienceData,
    showform,
    showform2,
    education,
    experience,
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
            <div className="resumeHeader">
                {(showform || education.length > 0) && <h1>Education</h1>}
                <EducationResumeContent
                    education={education}
                ></EducationResumeContent>
                <div className="educationContent">
                    {Object.keys(educationData).map((obj) => {
                        return <p key={obj}>{educationData[obj]}</p>;
                    })}
                </div>
            </div>
            <div className="resumeHeader">
                {(showform2 || experience.length > 0) && <h1>experience</h1>}
                <ExperienceResumeContent
                    experience={experience}
                ></ExperienceResumeContent>
                <div className="contact-info">
                    {Object.keys(experienceData).map((obj) => {
                        return <p key={obj}>{experienceData[obj]}</p>;
                    })}
                </div>
            </div>
        </div>
    );
}
