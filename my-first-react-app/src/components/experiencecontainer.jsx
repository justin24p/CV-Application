export default function ExperienceButton({
    experience,
    enableTempExperienceForm,
}) {
    return (
        <div>
            {experience.map((obj) => (
                <button
                    key={obj.id}
                    onClick={() => enableTempExperienceForm(obj.id)}
                >
                    {obj.companyName}
                </button>
            ))}
        </div>
    );
}
