import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoaderComp from "./Loader";

const Projects = ({projects, setProjects, setProject}) => {

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/projects')
            setProjects(await response.json())
        }

        fetchData();
    }, [])

    return <div>
        {
            projects.length !== 0
                ?
                <div>
                    Выберите проект
                    <ul>
                        {projects.map((value, index) => (
                            <li key={index} onClick={event => setProject(value)}>
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