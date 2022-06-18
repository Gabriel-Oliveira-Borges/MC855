import React, { useState, useEffect } from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import DefaultFooter from "../../constants/DefaultFooter";
import { getPage } from "../../queries/PageQueries"
import "./PacienteNovo.css"

const PacienteNovo = () => {
    const [page, setPage] = useState(0);
    
    useEffect(() => {
        getPage("pacienteNovo").then((p) => {setPage(p)})
    }, [])
    
    return (
        <div className="PacienteNovo">
            <BasicPage
                title={page.title}
                icon="DOCTOR_2"
                content={
                    <div className="PacienteNovoContent" dangerouslySetInnerHTML={{__html: page.content}}/>
                }
                footer={
                    <DefaultFooter />
                }
            />
        </div>
    )
}

export default PacienteNovo;