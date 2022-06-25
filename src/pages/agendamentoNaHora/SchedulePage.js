import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"
import "./SchedulePage.css"

function SchedulePage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("agendamento").then(p => {
			setPage(p)
		})
	}, [])

    const content = (
        <div className="ui grid ScheduleContent">
            <PageContentDetails body={page.bodyFirst} />
            <MedicalSpecialtyButton />
            <PageContentDetails body={page.bodySecond} />
        </div>
    )

	return (
		<div className="SchedulePage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={content}
				comeBackTo={"/consultas"}
			></BasicPage>
		</div>
	)
}

export default SchedulePage;