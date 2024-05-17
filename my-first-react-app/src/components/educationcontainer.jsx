export default function EducationButton({ education, tester }) {
    return (
        <div className="education">
            {education.map((obj) => (
                <button key={obj.id} onClick={() => tester(obj.id)}>
                    {obj.school}
                </button>
            ))}
        </div>
    );
}
