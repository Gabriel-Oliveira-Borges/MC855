import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import "./NewPatientPage.css";
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"

function NewPatientPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("pacienteNovo").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="NewPatientPage">
			{page.body &&
				<BasicPage 
					title={page.title}
					icon={page.icon}
					content={ 
						<PageContentDetails body={page.body}/> 
					}
					footer={ <MedicalSpecialtyButton/> }
					comeBackTo={"/"}
				></BasicPage>
			}	
		</div>
	)
}

export default NewPatientPage;