import React from "react";
import "./PageHeader.css";
import ImageMap from "../../constants/images"
import { Image } from "semantic-ui-react"

function BasicPage({ title, icon}) {
	return (
        <div className="PageHeader">
            <div className="title">
                <span as='h1'> {title} </span>
            </div>

            <div className="icon">
                <Image src={ImageMap[icon]} size="medium" />
            </div>
        </div>
	)
}

export default BasicPage;