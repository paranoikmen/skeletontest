import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import {useContext, useState} from "react";
import {myContext} from "./components/Context"
import Projects from "./components/Projects";
import Branches from "./components/Branches";
import Files from "./components/Files";

const App = () => {
    const userObject = useContext(myContext)
    //console.log(userObject)

    const [projects, setProjects] = useState([])
    const [project, setProject] = useState()
    const [branches, setBranches] = useState([])
    const [branch, setBranch] = useState()
    const [files, setFiles] = useState([])

    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/projects' exact>
                <Projects projects={projects} setProjects={setProjects} setProject={setProject}/>
            </Route>
            <Route path='/projects/branches' exact>
                <Branches project={project} branches={branches} setBranches={setBranches} setBranch={setBranch}/>
            </Route>
            <Route>
                <Files project={project} branch={branch} files={files} setFiles={setFiles}/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
