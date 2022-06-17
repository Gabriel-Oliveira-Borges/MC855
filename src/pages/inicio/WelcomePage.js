import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import "./WelcomePage.css";

function WelcomePage() {
	return (
		<div className="WelcomePage">
			<BasicPage 
				title="Boas-vindas ao Ambulatório de Pediatria do HC Unicamp!" 
				icon="HEART"
				content={
					<span> Conteúdo </span>
				}	
				footer={
					<span> Footer </span>
				}
			></BasicPage>
		</div>
	)
}

export default WelcomePage;