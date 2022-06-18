import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton"
import "./WelcomePage.css";
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";
import OrientationService from "../../libs/orientationsService";

const service = new OrientationService()

function WelcomePage() {

	const details = service.welcome()

	return (
		<div className="WelcomePage">
			<BasicPage 
				title={details.title}
				icon={details.icon}
				content={
					<PageContentOptions options={details.options}/>
				}	
				footer={
					<MedicalSpecialtyButton/>
				}
			></BasicPage>
		</div>
	)
}

export default WelcomePage;