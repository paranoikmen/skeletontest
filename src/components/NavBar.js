import React from "react";
import axios from "axios";


const NavBar = ({user, setUser}) => {
    const gitlabLogout = () => {
        axios.get('http://localhost:4000/logout', {
            withCredentials: true
        }).then(res => {
            if (res.data) {
                setUser([])
                window.location.href = "http://localhost:3000"
            }
        })
    }

    return (
        <div>
            {
                user.length !== 0
                    ?
                    <button onClick={gitlabLogout}>
                        выйди пожалуйста
                    </button>
                    :
                    null
            }
        </div>
    )
}

export default NavBar;