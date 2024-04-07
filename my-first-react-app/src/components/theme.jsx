import { useState } from "react";

export default function ThemeToggler() {
    const [thememode, setthememode] = useState(false);
    const toggleThemeMode = () => {
        setthememode(!thememode);
    };
    return <div className="toggler"></div>;
}
