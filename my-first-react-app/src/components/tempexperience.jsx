export default function TempExperienceForm({
    tempExperienceForm,
    handleExperienceArrayChange,
    cancelTempExperience,
    deleteExperienceObj,
}) {
    return (
        <div className="form">
            <h1>Experience</h1>
            <label htmlFor="Company">Company Name</label>
            <input
                type="text"
                name="companyName"
                id="companyName"
                value={tempExperienceForm.companyName}
                onChange={handleExperienceArrayChange}
            />
            <label htmlFor="Position Title">Position Title</label>
            <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                value={tempExperienceForm.positionTitle}
                onChange={handleExperienceArrayChange}
            />
            <label htmlFor="startDate">startDate number</label>
            <input
                type="text"
                name="startDate"
                id="startDate"
                value={tempExperienceForm.startDate}
                onChange={handleExperienceArrayChange}
            />
            <label htmlFor="endDate">endDate</label>
            <input
                type="text"
                name="endDate"
                id="endDate"
                value={tempExperienceForm.endDate}
                onChange={handleExperienceArrayChange}
            />
            <label htmlFor="location">location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={tempExperienceForm.location}
                onChange={handleExperienceArrayChange}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                value={tempExperienceForm.description}
                onChange={handleExperienceArrayChange}
            />
            <div className="sectionButtons">
                <button onClick={deleteExperienceObj}>Delete</button>
                <div className="pairButtons">
                    <button onClick={cancelTempExperience}>Cancel</button>
                    <button onClick={cancelTempExperience}>Save</button>
                </div>
            </div>
        </div>
    );
}
