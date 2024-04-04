import { useState } from "react";

function Experience() {
    const [showbutton, setShowButton] = useState(false);
    const toggleButton = () => {
        setShowButton(!showbutton);
    };
    const handeExperience = () => {
        console.log("experience");
    };
    return (
        <>
            <h1>Experience</h1>
            <button onClick={toggleButton}>^</button>
            {showbutton && (
                <button onClick={handeExperience}>Experience + </button>
            )}
        </>
    );
}
export default Experience;
