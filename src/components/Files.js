import React, {useEffect, useState} from "react";

const Files = ({project , branch, files, setFiles}) => {

    useEffect(() => {
        async function fetchData() {
            const id = project['id']
            const branchName = branch['name']
            const response = await fetch(`http://localhost:4000/files/${id}/${branchName}`)
            setFiles(await response.json())
        }
        fetchData();
    })

    return <div>
        files
        <ul>
            {files.map((value, index) => (
                <li key={index}>
                    {value['path']}
                </li>
            ))}
        </ul>
    </div>

}

export default Files;