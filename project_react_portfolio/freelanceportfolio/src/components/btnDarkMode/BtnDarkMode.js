
import { useEffect } from "react";

import { useLocalStorage } from "../../utils/UseLocalStorage";
import DetectDarkMode from "../../utils/DetectDarkMode";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import "./btnDarkMode.css";

const BtnDarkMode = () => {
    
    // const [darkMode, setDarkMode] = useState('light');

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', DetectDarkMode());
    // Own Hook to use localstorage for setting darkmode

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');

        } else {
            document.body.classList.remove('dark');

        }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener('change', (e) => {
                const newColorScheme = e.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    },);

    const toggleDarkmode = () => {
        setDarkMode((cur) => {
            return cur === 'light' ? 'dark' : 'light'; 
        })
    }

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    return (  
        <button  className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkmode}>
            <img src={sun} alt="light-mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="dark-mode" className="dark-mode-btn__icon"/>
        </button> 
    );
}
 
export default BtnDarkMode;