import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";

function ServicesPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("atendimento").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="ServicesPage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={ <PageContentDetails body={page.body}/> }
				footer={ <MedicalSpecialtyButton/> }
				comeBackTo={"/cadastrado"}
			></BasicPage>
		</div>
	)
}

export default ServicesPage;