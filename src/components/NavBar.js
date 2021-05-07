import React from "react";
import axios from "axios";

const NavBar = ({user, setUser, setProject, setBranch}) => {
    const gitlabLogout = () => {
        axios.get('http://localhost:4000/logout', {
            withCredentials: true
        }).then(res => {
            if (res.data) {
                setBranch([])
                setProject([])
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
                        выйди
                    </button>
                    :
                    null
            }
        </div>
    )
}

export default NavBar;