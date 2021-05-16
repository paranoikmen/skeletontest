import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import LoaderComp from "./Loader";
import "./Styles.css"

const Branches = ({user}) => {

    const [branches, setBranches] = useState([])
    let {projectId} = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/branch/${projectId}/${user['accessToken']}`)
            setBranches(await response.json())
        }

        fetchData();
    }, [user])


    return <div className={"projects_container"}>
        {
            branches.length !== 0
                ?
                <div className={"projects_card"}>
                    Выбери ветку:
                    <ul>
                        {branches.map((value, index) => (
                            <li key={index}>
                                <Link
                                    to={'/projects/' + projectId + '/branches/' + value['name'].replace('/', '%2F') + '/files'}>
                                    {value['name']}
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

export default Branches;