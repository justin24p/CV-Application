export default function TempEducationForm({
    tempEducationForm,
    handleEducationArrayChange,
    cancelTempEducation,
    deleteEducationObj,
}) {
    return (
        <div className="form">
            <h1>Education</h1>
            <label htmlFor="school">school</label>
            <input
                type="text"
                name="school"
                id="school"
                value={tempEducationForm.school}
                onChange={handleEducationArrayChange}
            />
            <label htmlFor="degree">degree</label>
            <input
                type="text"
                name="degree"
                id="degree"
                value={tempEducationForm.degree}
                onChange={handleEducationArrayChange}
            />
            <label htmlFor="startDate">startDate number</label>
            <input
                type="text"
                name="startDate"
                id="startDate"
                value={tempEducationForm.startDate}
                onChange={handleEducationArrayChange}
            />
            <label htmlFor="endDate">endDate</label>
            <input
                type="text"
                name="endDate"
                id="endDate"
                value={tempEducationForm.endDate}
                onChange={handleEducationArrayChange}
            />
            <label htmlFor="location">location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={tempEducationForm.location}
                onChange={handleEducationArrayChange}
            />
            <div className="sectionButtons">
                <button onClick={deleteEducationObj}>Delete</button>
                <div className="pairButtons">
                    <button onClick={cancelTempEducation}>Cancel</button>
                    <button onClick={cancelTempEducation}>Save</button>
                </div>
            </div>
        </div>
    );
}
