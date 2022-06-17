import React from "react";
import "./BasicPage.css";
import ImageMap from "../../constants/images"

function BasicPage({ title, icon, content, footer}) {
	return (
		<div className="BasicPage">
			<div className="header">
				<div className="title">
					<span as='h1'> {title} </span>
				</div>

				<div className="icon">
					<img src={ImageMap[icon]}></img>
				</div>
			</div>

			<div className="content">
				{content}
			</div>

			<div className="footer">
				{footer}
			</div>
			
		</div>
	)
}

export default BasicPage;