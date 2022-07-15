import React from "react";
import "./InicioAdmin.css";
import EditionPageNav from "../../../components/editionPageNav/editionPageNav";
import Option from "../../../components/option/Option"
import pages from '../../../constants/pages'
import ImageMap from '../../../constants/images'


function InicioAdminPage() {
	return (
		<div className="InicioAdminPage">
            <EditionPageNav/>

            <div className="InicioAdminPageContent">

                <div className="EditionPageContentTextEditorDescription">
                    <h2> Boa-vindas! Esta é a área administrativa do site <a>www.pediatria.hc.unicamp.br</a>.  </h2>
                    <span>Aqui, você pode editar todos os textos de instruções e informações que constam no site. Para isso, basta selecionar dentre as opções abaixo qual é a página correspondente aos textos que você deseja alterar.</span>
                </div>

                
                <div className="InicioAdminPageContentOption">
                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["CRONOGRAMA_SEMANAL"].id}
                            image={ImageMap[pages["CRONOGRAMA_SEMANAL"].icon].path}
                            description={pages["CRONOGRAMA_SEMANAL"].adminDescription}
                            key={pages["CRONOGRAMA_SEMANAL"].id}
                        />

                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["PACIENTE_NOVO"].id}
                            image={ImageMap[pages["PACIENTE_NOVO"].icon].path}
                            description={pages["PACIENTE_NOVO"].adminDescription}
                            key={pages["PACIENTE_NOVO"].id}
                        />
                </div>

                <p> Ou, para os casos em que a pessoa já é paciente do HC Unicamp: </p>

                <div className="InicioAdminPageContentOption">
                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["CONSULTA_AGENDADA"].id}
                            image={ImageMap[pages["CONSULTA_AGENDADA"].icon].path}
                            description={pages["CONSULTA_AGENDADA"].adminDescription}
                            key={pages["CONSULTA_AGENDADA"].id}
                        />

                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["PROCEDIMENTOS_MEDICOS"].id}
                            image={ImageMap[pages["PROCEDIMENTOS_MEDICOS"].icon].path}
                            description={pages["PROCEDIMENTOS_MEDICOS"].adminDescription}
                            key={pages["PROCEDIMENTOS_MEDICOS"].id}
                        />
                </div>

                <div className="InicioAdminPageContentOption">
                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["ENCAIXE_EMAIL"].id}
                            image={ImageMap[pages["ENCAIXE_EMAIL"].icon].path}
                            description={pages["ENCAIXE_EMAIL"].adminDescription}
                            key={pages["ENCAIXE_EMAIL"].id}
                        />

                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["PROCEDIMENTOS_BUROCRATICOS"].id}
                            image={ImageMap[pages["PROCEDIMENTOS_BUROCRATICOS"].icon].path}
                            description={pages["PROCEDIMENTOS_BUROCRATICOS"].adminDescription}
                            key={pages["PROCEDIMENTOS_BUROCRATICOS"].id}
                        />
                </div>

                <div className="InicioAdminPageContentOption only">
                        <Option
                            className="link-option"
                            link={"/admin/edit/"+pages["AGENDAR_CONSULTA_NA_HORA"].id}
                            image={ImageMap[pages["AGENDAR_CONSULTA_NA_HORA"].icon].path}
                            description={pages["AGENDAR_CONSULTA_NA_HORA"].adminDescription}
                            key={pages["AGENDAR_CONSULTA_NA_HORA"].id}
                        />
                </div>
            </div>
		</div>
	)
}

export default InicioAdminPage;