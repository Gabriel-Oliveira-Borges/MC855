import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import { getPage } from "../../database/PageDB.js"
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import Cronogram from "../../components/cronogram/Cronogram";

function SpecialtiesPage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getPage("especialidades").then(p => {
			setPage(p)
		})
	}, [])

    const content = (
        <div className="ui grid SpecialtiesContent">
            <PageContentDetails body={page.body} />
            <Cronogram day="SEGUNDA-FEIRA" morning={page.mondayMorning} afternoon={page.mondayAfternoon} />
            <Cronogram day="TERÇA-FEIRA" morning={page.tuesdayMorning} afternoon={page.tuesdayAfternoon} />
            <Cronogram day="QUARTA-FEIRA" morning={page.wednesdayMorning} afternoon={page.wednesdayAfternoon} />
            <Cronogram day="QUINTA-FEIRA" morning={page.thursdayMorning} afternoon={page.thursdayAfternoon} />
            <Cronogram day="SEXTA-FEIRA" morning={page.fridayMorning} afternoon={page.fridayAfternoon} />
        </div>
    )

	return (
		<div className="AppointmentsPage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={content}
				comeBackTo={"/"}
			></BasicPage>
		</div>
	)
}

export default SpecialtiesPage;