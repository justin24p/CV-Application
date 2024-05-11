import "../styles/resumecontent.css";

export default function EducationResumeContent({ education }) {
    return (
        <div className="educationContent">
            {education.map((edu, index) => (
                <div className="gourd" key={index}>
                    <div className="left">
                        <p>{edu.school}</p>
                        <div className="dates">
                            <p>{edu.startDate}</p>
                            <p>-</p>
                            <p>{edu.endDate}</p>
                        </div>
                    </div>
                    <div className="right">
                        <p id="B">{edu.location}</p>
                        <p>{edu.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
