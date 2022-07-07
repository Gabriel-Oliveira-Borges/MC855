import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import "./NewPatientPage.css";
import PageContentDetails from "../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../database/PageDB.js"
import TextEditor from "../../components/textEditor/TextEditor";

function NewPatientPage() {
	const [page, setPage] = useState(0)
	const isAdmin = true

	useEffect(() => {
		getPage("pacienteNovo").then(p => {
			setPage(p)
		})
	}, [])

	const handleChange = (value) => {
		console.log("Handle Change: ", value)
		setPage({...page, body:value})
	}

	return (
		<div className="NewPatientPage">
			{page.body &&
				<BasicPage 
					title={page.title}
					icon={page.icon}
					editionMode={isAdmin}
					content={ 
						<div className={isAdmin ? "EditionMode" : ""}>
							{isAdmin && 
								<div>
									<h2> Edite a página aqui </h2>
									<TextEditor text={page.body} onChangeFn={handleChange}/>
								</div>	
							}
							<div>
								{isAdmin && <h2> Acompanhe como ficará</h2>}
								<PageContentDetails body={page.body}/> 
							</div>
						</div>
					}
					footer={ <MedicalSpecialtyButton/> }
					comeBackTo={"/"}
				></BasicPage>
			}	
		</div>
	)
}

export default NewPatientPage;