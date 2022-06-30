import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";
import { getOptions } from "../../database/OptionsDB";

function AppointmentsPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getOptions("consultas").then(p => {
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
				comeBackTo={"/cadastrado"}
			></BasicPage>
		</div>
	)
}

export default AppointmentsPage;