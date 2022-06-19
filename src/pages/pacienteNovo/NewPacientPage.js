import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import "./NewPacientPage.css";
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"

function NewPacientPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("pacienteNovo").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="NewPacientPage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={ <PageContentDetails body={page.body}/> }
				footer={ <MedicalSpecialtyButton/> }
				comeBackTo={"/"}
			></BasicPage>
		</div>
	)
}

export default NewPacientPage;