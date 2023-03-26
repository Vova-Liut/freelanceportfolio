import './btnGitHub.css';
import gitHubIcon from './../../img/icons/gitHub-black.svg';


const BtnGitHub = ({link}) => {
    return (  
        <a  href={link} 
            target="_blank" 
            rel="noreferrer"
            className="btn-outline">
            <img src={gitHubIcon} 
            alt="project-link__github" />
            Github repo
        </a>
    );
}
 
export default BtnGitHub;