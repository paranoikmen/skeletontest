import React, {useEffect} from "react";
import "./Styles.css"
import gitlab_logo from "../images/gitlab.svg";

const Login = () => {

    const gitlabLogin = () => {
        window.location.href = "http://localhost:4000/auth/gitlab"
    }

    return (
        <div className={"container"}>
            <div className={"login_card"} onClick={gitlabLogin}>
                <img className="gitlab_logo" src={gitlab_logo}/>
                <h3>Войти с помощью GitLab</h3>
            </div>
        </div>
    )
}

export default Login;