import Project from '../components/Project/Project';


import {projectsList} from '../helpers/ProjectsList'

const Projects = () => {

// const projectRender = (list) => {
//     return (
//         list.map(() => {
//             return <Project />
//         })
//     )};


    return (  
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projectsList.map((item, index) => {
                        return <Project
                        key={index} 
                        title={item.title}
                        img={item.img}
                        index={index} />
                    })}



                </ul>
            </div>
        </main>
    );
}
 
export default Projects;
