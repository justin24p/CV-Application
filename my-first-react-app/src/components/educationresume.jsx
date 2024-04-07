export default function EducationResumeContent({ education }) {
    return (
        <div className="educationContent">
            {education.map((edu, index) => (
                <div key={index}>
                    <div>
                        <div className="dates">
                            <p>{edu.startDate}</p>
                            <p>{edu.endDate}</p>
                        </div>
                        <p>{edu.location}</p>
                    </div>
                    <div>
                        <p>{edu.location}</p>
                        <p>{edu.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
