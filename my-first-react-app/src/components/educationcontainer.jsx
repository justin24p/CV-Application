export default function EducationButton({ education }) {
    console.log(education);
    return (
        <div>
            {education.map((obj) => (
                <button key={obj.school}>{obj.school}</button>
            ))}
        </div>
    );
}
