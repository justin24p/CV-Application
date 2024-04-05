import "../styles/resume.css";

export default function Resume({ personalData, educationData }) {
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
                <h2>{educationData.school}</h2>
            </div>
        </div>
    );
}
