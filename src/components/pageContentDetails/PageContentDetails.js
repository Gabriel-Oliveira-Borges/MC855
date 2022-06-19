import React from "react";
import "./PageContentDetails.css";

function PageContentDetails({ body }) {
	return (
		<div className="PageContentDetails" dangerouslySetInnerHTML={{ __html: body }} />
	)
}

export default PageContentDetails;