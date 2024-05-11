export default function TempExperienceForm({
    tempExperienceForm,
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
                onChange={}
            />
            <label htmlFor="Position Title">Position Title</label>
            <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                value={tempExperienceForm.positionTitle}
                onChange={}
            />
            <label htmlFor="startDate">startDate number</label>
            <input
                type="text"
                name="startDate"
                id="startDate"
                value={tempExperienceForm.startDate}
                onChange={}
            />
            <label htmlFor="endDate">endDate</label>
            <input
                type="text"
                name="endDate"
                id="endDate"
                value={tempExperienceForm.endDate}
                onChange={}
            />
            <label htmlFor="location">location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={tempExperienceForm.location}
                onChange={}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                value={tempExperienceForm.description}
                onChange={}
            />
            <div className="sectionButtons">
                <button>Delete</button>
                <div className="pairButtons">
                    <button onClick={}>Cancel</button>
                    <button onClick={}>Save</button>
                </div>
            </div>
        </div>
    );
}
