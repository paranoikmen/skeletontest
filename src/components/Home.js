import React, {useEffect} from "react";
import Login from "./Login";

const Home = () => {
    async function repositoryFromGit() {
        let response = await (await fetch("http://localhost:4000/files")).json()
        return response
    }

    async function parseRep(repository) {
        let countTree = 0;
        let countBlob = 0;
        let countFile = 0;

        for(let file of repository) {
            if(file.type == "tree") {
                countTree++
            }
            else if(file.type == "blob") {
                countBlob++
            }
            countFile++
        }
        console.log("countTree: ", countTree)
        console.log("countBlob: ", countBlob)
        console.log("countFile: ", countFile)
    }

    useEffect(() => {
        const asyncop = async () => {
            await parseRep(await repositoryFromGit())
        }
        asyncop()
    })

    return(
        <div>
            home client
            <Login/>
        </div>
    )
}

export default Home;