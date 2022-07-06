import React, { useState, useEffect } from "react";
import "./EditPacienteNovo.css";
import BasicPage from '../../../../components/basicPage/BasicPage'
import PageContentDetails from "../../../../components/pageContentDetails/PageContentDetails";
import MedicalSpecialtyButton from "../../../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import { getPage } from "../../../../database/PageDB.js"
import TextEditor from "../../../../components/textEditor/TextEditor"

function EditNewPacientPage() {
	const [page, setPage] = useState({})
	const [body, setBody] = useState("")

	useEffect(() => {
		getPage("pacienteNovo").then(p => {
			setPage(p)
			setBody(p.body)
		})
	}, [])

	const handleChange = (value) => {
		console.log("Handle Change: ", value)
		setBody(value)
	}

	return (
		<div className="EditNewPacientPage">
			<div className="Editor">
				<TextEditor text={body} onChangeFn={handleChange}/>
			</div>

			<div className="Preview">
				<BasicPage 
					title={page.title}
					icon={page.icon}
					content={ <PageContentDetails body={body}/> }
					footer={ <MedicalSpecialtyButton/> }
					comeBackTo={"/"}
				></BasicPage>
			</div>

			
		</div>
	)
}

export default EditNewPacientPage;