import React from "react";
import "./PageHeader.css";
import ImageMap from "../../constants/images"
import { Link } from 'react-router-dom'

function BasicPage({ title, icon, comeBackTo}) {
	return (
        <div className="PageHeader">
            { 
                comeBackTo ? 
                <div className="breadcrumb" > 
                    <Link className='link' to={comeBackTo}>
                        <i class="angle left icon"></i>
                        Voltar 
                    </Link>
                </div> 
                : null
            }

            <div className="title" style={ comeBackTo ? {padding: "30px 10px 20px 10px"} : {}}>
                <span as='h1'> {title} </span>
            </div>

            <div className="icon">
                <img src={ImageMap[icon].path} alt={ImageMap[icon].altText}></img>
            </div>
        </div>
	)
}

export default BasicPage;