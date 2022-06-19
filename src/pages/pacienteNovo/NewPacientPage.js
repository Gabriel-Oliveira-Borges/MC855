import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import "./NewPacientPage.css";
import OrientationService from "../../libs/orientationsService";
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";

const service = new OrientationService()

function NewPacientPage() {

	const details = service.newPacient()

	return (
		<div className="NewPacientPage">
			<BasicPage 
				title={details.title}
				icon={details.icon}
				content={ <PageContentDetails body={details.body}/> }
				footer={ <MedicalSpecialtyButton/> }
				comeBackTo={"/"}
			></BasicPage>
		</div>
	)
}

export default NewPacientPage;