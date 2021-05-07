import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoaderComp from "./Loader";

const Projects = ({user, setSessionStorageProject}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/projects/${user['accessToken']}`)
            setProjects(await response.json())
        }

        fetchData();
    }, [user])

    return <div>
        {
            projects.length !== 0
                ?
                <div>
                    Выбери проект:
                    <ul>
                        {projects.map((value, index) => (
                            <li key={index} onClick={event => {
                                setSessionStorageProject(value)
                            }}>
                                <Link to='/projects/branches'>
                                    {value['name_with_namespace']}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <LoaderComp/>
        }
    </div>

}

export default Projects;