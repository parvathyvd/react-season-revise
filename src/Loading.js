import React from "react";
import './Loading.css';


const Loading = (props) => {
    return(
        <div className="loading">
            <div className ="ui active dimmer">
            <div className ="ui big text loader">
                {props.message}
            </div>
            </div>   
        </div>
    )
}

Loading.defaultProps = {
    message: 'Loading...'
}

export default Loading;