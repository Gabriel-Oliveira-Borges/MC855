import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";
import { getOptions } from "../../database/OptionsDB";
import './OldPatientPage.css'

const OldPatientPage = () => {
    const [page, setPage] = useState(0)

	useEffect(() => {
		getOptions("pacienteAntigo").then(p => {
			setPage(p)
		})
	}, [])

    return (
        <div className="PacienteJaCadastrado">
            <BasicPage
                title={page.title}
                icon={page.icon}
                content={
                    <PageContentOptions options={page.options}/>
                }
                footer={
					<MedicalSpecialtyButton/>
				}
                comeBackTo={"/"}
            />
        </div>
    )
}

export default OldPatientPage;