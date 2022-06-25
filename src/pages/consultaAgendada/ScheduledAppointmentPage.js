import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"

function ScheduledAppointmentPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("consultaAgendada").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="ScheduledAppointmentPage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={ <PageContentDetails body={page.body}/> }
				footer={ <MedicalSpecialtyButton/> }
				comeBackTo={"/consultas"}
			></BasicPage>
		</div>
	)
}

export default ScheduledAppointmentPage;