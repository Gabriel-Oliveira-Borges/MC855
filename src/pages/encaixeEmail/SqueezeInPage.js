import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"

function SqueezeInPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("encaixe").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="SqueezeInPage">
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

export default SqueezeInPage;