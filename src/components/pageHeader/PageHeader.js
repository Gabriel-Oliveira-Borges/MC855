import React from "react";
import "./PageHeader.css";
import ImageMap from "../../constants/images"

function BasicPage({ title, icon}) {
	return (
        <div className="PageHeader">
            <div className="title">
                <span as='h1'> {title} </span>
            </div>

            <div className="icon">
                <img src={ImageMap[icon]}></img>
            </div>
        </div>
	)
}

export default BasicPage;