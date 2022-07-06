import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton"
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";
import { getOptions } from "../../database/OptionsDB";
import "./WelcomePage.css";


function WelcomePage() {
	const [page, setPage] = useState(0)

	useEffect(() => {
		getOptions("welcome").then(p => {
			setPage(p)
		})
	}, [])

	return (
		<div className="WelcomePage">
			<BasicPage 
				title={page.title}
				icon={page.icon}
				content={
					<PageContentOptions options={page.options}/>
				}	
				footer={
					<MedicalSpecialtyButton/>
				}
			></BasicPage>
		</div>
	)
}

export default WelcomePage;