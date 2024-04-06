export default function EducationInput({
    educationData,
    handleEducationChange,
}) {
    return (
        <div className="form">
            <h1>Education</h1>
            <label htmlFor="school">school</label>
            <input
                type="text"
                name="school"
                id="school"
                value={educationData.school}
                onChange={handleEducationChange}
            />
            <label htmlFor="degree">degree</label>
            <input
                type="text"
                name="degree"
                id="degree"
                value={educationData.degree}
                onChange={handleEducationChange}
            />
            <label htmlFor="startDate">startDate number</label>
            <input
                type="text"
                name="startDate"
                id="startDate"
                value={educationData.startDate}
                onChange={handleEducationChange}
            />
            <label htmlFor="endDate">endDate</label>
            <input
                type="text"
                name="endDate"
                id="endDate"
                value={educationData.endDate}
                onChange={handleEducationChange}
            />
            <label htmlFor="location">location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={educationData.location}
                onChange={handleEducationChange}
            />
            <div className="sectionButtons">
                <button>Delete</button>
                <div className="pairButtons">
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}
