import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Branches = ({project, branches, setBranches, setBranch}) => {

    useEffect(() => {
        async function fetchData() {
            const id = project['id']
            const response = await fetch(`http://localhost:4000/branch/${id}`)
            setBranches(await response.json())
        }
        fetchData();
    })

    return <div>
        branch
        <ul>
            {branches.map((value, index) => (
                <li key={index} onClick={event => setBranch(value)}>
                    <Link to='/projects/branches/files'>
                        {value['name']}
                    </Link>
                </li>
            ))}
        </ul>
    </div>

}

export default Branches;