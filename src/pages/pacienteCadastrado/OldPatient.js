import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import OrientationService from "../../libs/orientationsService";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import PageContentOptions from "../../components/pageContentOptions/PageContentOptions";
import './OldPatient.css'

const service = new OrientationService()

const OldPatient = () => {
    const details = service.oldPatient()

    return (
        <div className="PacienteJaCadastrado">
            <BasicPage
                title={details.title}
                icon={details.icon}
                content={
                    <PageContentOptions options={details.options}/>
                }
                footer={
					<MedicalSpecialtyButton/>
				}
            />
        </div>
    )
}

export default OldPatient;