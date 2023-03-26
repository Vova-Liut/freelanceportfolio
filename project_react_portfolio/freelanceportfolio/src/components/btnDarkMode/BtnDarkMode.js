
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import "./btnDarkMode.css";


const BtnDarkMode = () => {
    
    const toggleDarkmode = () => {
        console.log('BTN');
    }

    return (  
        <button className="dark-mode-btn" onClick={toggleDarkmode}>
            <img src={sun} alt="light-mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="dark-mode" className="dark-mode-btn__icon"/>
        </button> 
    );
}
 
export default BtnDarkMode;