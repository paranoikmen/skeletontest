import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoaderComp from "./Loader";

const Branches = ({user, setSessionStorageBranch, sessionStorageProject}) => {

    const [branches, setBranches] = useState([])

    useEffect(() => {
        async function fetchData() {
            const id = sessionStorageProject['id']
            const response = await fetch(`http://localhost:4000/branch/${id}/${user['accessToken']}`)
            setBranches(await response.json())
        }

        fetchData();
    }, [user])

    return <div>
        {
            branches.length !== 0
                ?
                <div>
                    Выбери ветку:
                    <ul>
                        {branches.map((value, index) => (
                            <li key={index} onClick={event => {
                                setSessionStorageBranch(value)
                            }}>
                                <Link to='/projects/branches/files'>
                                    {value['name']}
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

export default Branches;