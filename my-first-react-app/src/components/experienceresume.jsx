import "../styles/resumecontent.css";

export default function ExperienceResumeContent({ experience }) {
    return (
        <div className="expcationContent">
            {experience.map((exp, index) => (
                <div className="gourd" key={index}>
                    <div className="left">
                        <p>{exp.companyName}</p>
                        <div className="dates">
                            <p>{exp.startDate}</p>
                            <p>-</p>
                            <p>{exp.endDate}</p>
                        </div>
                        <p>{exp.location}</p>
                    </div>
                    <div className="right">
                        <p id="B">{exp.location}</p>
                        <p>{exp.positionTitle}</p>
                        <p>{exp.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
