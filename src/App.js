import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"
import {useContext} from "react";
import {myContext} from "./components/Context"

const App = () => {
    const userObject = useContext(myContext)

    return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
