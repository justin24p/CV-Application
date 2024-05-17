export default function ExperienceButton({
    experience,
    enableTempExperienceForm,
}) {
    return (
        <div className="experience">
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
