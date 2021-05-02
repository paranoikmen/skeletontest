import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import {useContext} from "react";
import {myContext} from "./components/Context"
import Projects from "./components/Projects";

const App = () => {
    const userObject = useContext(myContext)
    //console.log(userObject)

    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/projects' component={Projects}></Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
