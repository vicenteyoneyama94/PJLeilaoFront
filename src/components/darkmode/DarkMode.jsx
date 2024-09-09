import React, { useState, useEffect } from "react";
import './DarkMode.css'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.classList.toggle('dark-theme', newMode);
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
        return (
            <div className="home-container">
                <div className="theme-switch">
                    <button onClick={toggleTheme}>
                        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
            </div>
        );
    }
}
export default DarkMode;