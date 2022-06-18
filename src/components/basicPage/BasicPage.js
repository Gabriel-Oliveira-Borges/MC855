import React from "react";
import "./BasicPage.css";
import PageHeader from "../pageHeader/PageHeader"

function BasicPage({ title, icon, content, footer, comeBackTo}) {

	return (
		<div className="BasicPage">
			<PageHeader
				title={title}
				icon={icon}
				comeBackTo = {comeBackTo}
			/>

			<div className="container">
				<div className="content">
					{content}
				</div>

				<div className="footer">
					{footer}
				</div>
			</div>
		
		</div>
	)
}

export default BasicPage;