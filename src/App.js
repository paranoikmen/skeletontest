import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {useEffect} from "react";
import Projects from "./components/Projects";
import Branches from "./components/Branches";
import Files from "./components/Files";
import axios from "axios";
import {useSessionStorage} from 'react-use';
import Login from "./components/Login";
import "./components/Styles.css"
import Header from "./components/Header";

const App = () => {

    const [user, setUser] = useSessionStorage('userData', []);

    useEffect(() => {
        async function fetchData() {
            axios.get('http://localhost:4000/getuser', {
                withCredentials: true
            }).then(res => {
                if (res.data) {
                    setUser(res.data)
                }
            })
        }
        fetchData()
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Header
                        user={user}
                        setUser={setUser}/>
                    {
                        user.length !== 0
                            ?
                            <Redirect to='/projects'/>
                            :
                            <Login/>
                    }
                </Route>
                <Route path='/projects' exact>
                    <Header
                        user={user}
                        setUser={setUser}
                    />
                    <Projects
                        user={user}
                    />
                </Route>
                <Route path='/projects/:projectId/branches' exact>
                    <Header
                        user={user}
                        setUser={setUser}
                    />
                    <Branches
                        user={user}
                    />
                </Route>
                <Route path='/projects/:projectId/branches/:branchName/files' exact>
                    <Header
                        user={user}
                        setUser={setUser}
                    />
                    <Files
                        user={user}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
