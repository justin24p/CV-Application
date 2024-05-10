import "../styles/resumecontent.css";

export default function EducationResumeContent({ education }) {
    return (
        <div className="educationContent">
            {education.map((edu, index) => (
                <div className="gourd" key={index}>
                    <div className="left">
                        <div className="dates">
                            <p>{edu.startDate}</p>
                            <p>-</p>
                            <p>{edu.endDate}</p>
                        </div>
                        <p>{edu.location}</p>
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
