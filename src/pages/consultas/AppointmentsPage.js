import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";

function AppointmentsPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("consultas").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="AppointmentsPage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={ <PageContentOptions options={page.options}/> }
				footer={ <MedicalSpecialtyButton/> }
				comeBackTo={"/consultas"}
			></BasicPage>
		</div>
	)
}

export default AppointmentsPage;