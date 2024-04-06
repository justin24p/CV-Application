export default function ExperienceForm({
    experienceData,
    handleExperienceChange,
}) {
    return (
        <div className="form">
            <h1>Experience</h1>
            <label htmlFor="Company">Company Name</label>
            <input
                type="text"
                name="companyName"
                id="companyName"
                value={experienceData.companyName}
                onChange={handleExperienceChange}
            />
            <label htmlFor="Position Title">Position Title</label>
            <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                value={experienceData.positionTitle}
                onChange={handleExperienceChange}
            />
            <label htmlFor="startDate">startDate number</label>
            <input
                type="text"
                name="startDate"
                id="startDate"
                value={experienceData.startDate}
                onChange={handleExperienceChange}
            />
            <label htmlFor="endDate">endDate</label>
            <input
                type="text"
                name="endDate"
                id="endDate"
                value={experienceData.endDate}
                onChange={handleExperienceChange}
            />
            <label htmlFor="location">location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={experienceData.location}
                onChange={handleExperienceChange}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                value={experienceData.description}
                onChange={handleExperienceChange}
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
