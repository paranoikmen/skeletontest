import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoaderComp from "./Loader";
import "./Styles.css"

const Projects = ({user}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/projects/${user['accessToken']}`)
            setProjects(await response.json())
        }

        fetchData();
    }, [user])

    return <div className={"projects_container"}>
        {
            projects.length !== 0
                ?
                <div className={"projects_card"}>
                    Выбери проект:
                    <ul>
                        {projects.map((value, index) => (
                            <li key={index}>
                                <Link to={'/projects' + '/' + value['id'] + '/branches'}>
                                    {value['name_with_namespace']}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <div className={"loader_container"}><LoaderComp/></div>
        }
    </div>
}

export default Projects;