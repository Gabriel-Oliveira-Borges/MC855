import React from "react";
import "./PageHeader.css";
import ImageMap from "../../constants/images"
import { Link } from 'react-router-dom'

function BasicPage({ title, icon, comeBackTo}) {
    const img = () => {
        if (icon === undefined) {
            return null
        } else {
            return <img src={ImageMap[icon].path} alt={ImageMap[icon].altText} />
        }
    }

    return (
        <div className="PageHeader">
            { 
                comeBackTo ? 
                <div className="breadcrumb" > 
                    <Link className='link' to={comeBackTo}>
                        <i className="angle left icon"></i>
                        Voltar 
                    </Link>
                </div> 
                : null
            }

            <div className="title" style={ comeBackTo ? {padding: "30px 10px 20px 10px"} : {}}>
                <span as='h1' dangerouslySetInnerHTML={{__html: title}} />
            </div>

            <div className="icon">{img()}</div>
        </div>
	)
}

export default BasicPage;