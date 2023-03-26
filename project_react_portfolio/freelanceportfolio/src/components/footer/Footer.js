import './footer.css';

import vk from "./../../img/icons/vk.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import github from "./../../img/icons/github.svg";
import instagram from "./../../img/icons/instagram.svg";

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                        <a href="#!">
                            <img src={vk} alt="vk_icon"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                            <img src={instagram} alt="inst_icon"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                            <img src={twitter} alt="twitter_icon"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                            <img src={github} alt="github_icon"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                            <img src={linkedIn} alt="linkIdn_icon"/>
                        </a>
                    </li>
                </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
            </div>

            </div>
        </footer>
    );
}
 
export default Footer;
