import React from "react";
import "./editionPageNav.css";
import ImageMap from '../../constants/images'
import LogoutButton from "../logoutButton/logoutButton";

function EditionPageNav() {
	const icon = "HEART"
	return (
		<div className="EditionPageNav">
			<div className="EditionPageNavLogo">
				<img src={ImageMap[icon].path} alt={ImageMap[icon].altText} />
				<span> ambulatório de pediatria da unicamp </span>
			</div>
			<div className="EditionPageNavLogout">
				<LogoutButton/>
			</div>
		</div>
	)
}

export default EditionPageNav;