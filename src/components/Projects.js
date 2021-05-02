import React from "react";

const Projects = () => {
    const data = async () => {
        let response = await fetch('http://localhost:4000/projects')
        console.log(response)
        if(response.ok) {
            return response.json()
        }
    }

    return <div>
        {data()}
    </div>

}

export default Projects;