import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Projects from "./components/Projects";
import Branches from "./components/Branches";
import Files from "./components/Files";
import NavBar from "./components/NavBar";
import axios from "axios";
import {useSessionStorage} from 'react-use';
import Login from "./components/Login";

const App = () => {

    const [sessionStorageUserData, setSessionStorageUserData] = useSessionStorage('userData', []);
    const [sessionStorageProjectData, setSessionStorageProjectData] = useSessionStorage('projectData', []);
    const [sessionStorageBranchData, setSessionStorageBranchData] = useSessionStorage('branchData', []);

    useEffect(() => {
        async function fetchData() {
            axios.get('http://localhost:4000/getuser', {
                withCredentials: true
            }).then(res => {
                if (res.data) {
                    console.log(res.data)
                    setSessionStorageUserData(res.data)
                }
            })
        }
        fetchData()
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <NavBar
                        user={sessionStorageUserData}
                        setUser={setSessionStorageUserData}
                        setBranch={setSessionStorageBranchData}
                        setProject={setSessionStorageProjectData}
                    />
                    <Login />
                </Route>
                <Route path='/projects' exact>
                    <NavBar
                        user={sessionStorageUserData}
                        setUser={setSessionStorageUserData}
                        setBranch={setSessionStorageBranchData}
                        setProject={setSessionStorageProjectData}
                    />
                    <Projects
                        user={sessionStorageUserData}
                        setSessionStorageProject={setSessionStorageProjectData}
                    />
                </Route>
                <Route path='/projects/branches' exact>
                    <NavBar
                        user={sessionStorageUserData}
                        setUser={setSessionStorageUserData}
                        setBranch={setSessionStorageBranchData}
                        setProject={setSessionStorageProjectData}
                    />
                    <Branches
                        user={sessionStorageUserData}
                        sessionStorageProject={sessionStorageProjectData}
                        setSessionStorageBranch={setSessionStorageBranchData}
                    />
                </Route>
                <Route path='/projects/branches/files' exact>
                    <NavBar
                        user={sessionStorageUserData}
                        setUser={setSessionStorageUserData}
                        setBranch={setSessionStorageBranchData}
                        setProject={setSessionStorageProjectData}
                    />
                    <Files
                        project={sessionStorageProjectData}
                        branch={sessionStorageBranchData}
                        user={sessionStorageUserData}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
