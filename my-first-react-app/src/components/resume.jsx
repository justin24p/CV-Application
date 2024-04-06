import "../styles/resume.css";

export default function Resume({
    personalData,
    educationData,
    experienceData,
    showform,
    showform2,
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
            <div className="education">
                {showform && <h1>education</h1>}
                <div className="contact-info">
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
