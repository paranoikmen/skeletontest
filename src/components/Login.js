import React from "react";

const Login = () => {
    const gitlabLogin = () => {
        window.location.href = "http://localhost:4000/auth/gitlab"
    }

    return(
        <div>
            login
            <button onClick={gitlabLogin}>
                login gitlab
            </button>
        </div>
    )
}

export default Login;