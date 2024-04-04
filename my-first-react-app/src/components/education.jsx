import { useState } from "react";
function Education() {
    const [showbutton, setShowButton] = useState(false);

    const toggleButton = () => {
        setShowButton(!showbutton);
    };
    const handeEducation = () => {
        console.log("Education dislay");
    };
    return (
        <>
            <h1>Education</h1>
            <button onClick={toggleButton}>^</button>
            {showbutton && (
                <button onClick={handeEducation}>Education +</button>
            )}
        </>
    );
}
export default Education;
