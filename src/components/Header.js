import React from "react";
import logo from "../images/hammer-png-11553953666sek7vnhpyq.png"
import logout from "../images/logout.svg"
import axios from "axios";

const Header= ({user, setUser}) => {
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
        <div className="header">
            <div className={"logo_block"}>
                <img className="logo" src={logo}/>
                <div>GitLab AutoTester</div>
            </div>
            {
                user.length !== 0
                    ?
                    <div className={"logout_card"} onClick={gitlabLogout}>
                        <img className="logout_logo" src={logout}/>
                        <h3>Выйти</h3>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default Header;