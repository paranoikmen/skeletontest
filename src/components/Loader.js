import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComp = () => {
    return <div>
        <Loader type="Puff" color="#FF4500" height={50} width={50}/>
    </div>

}

export default LoaderComp;