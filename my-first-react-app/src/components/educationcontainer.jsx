export default function EducationButton({ education, tester }) {
    return (
        <div>
            {education.map((obj) => (
                <button key={obj.id} onClick={() => tester(obj.id)}>
                    {obj.school}
                </button>
            ))}
        </div>
    );
}
