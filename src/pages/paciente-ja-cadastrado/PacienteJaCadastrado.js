import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import Option from "../../components/option/Option";

const PacienteJaCadastrado = () => {
    return (
        <div className="PacienteJaCadastrado">
            <BasicPage
                title="Já sou paciente do HC Unicamp"
                icon="DOCTOR"
                content={
                    <div className="content">
                        <p>Selecione uma das opções abaixo:</p>
                        <Option
                            className="link-option"
                            link="/consultas"
							description={
                                <ul>
                                    <li>Consulta agendada</li>
                                    <li>Encaixe por e-mail</li>
                                    <li>Agendar consulta hoje</li>
                                </ul>
                            }
                        />
                        <Option
                            className="link-option"
                            link="/procedimentos"
							description={
                                <ul>
                                    <li>Receber medicamento</li>
                                    <li>Fazer teste ou curativo </li>
                                    <li>Realizar outro procedimento</li>
                                </ul>
                            }
                        />
                        <Option
                            className="link-option"
                            link="/burocratico"
							description={
                                <ul>
                                    <li>Remarcar consulta</li>
                                    <li>Pedir relatório, receita ou exames</li>
                                    <li>Fazer uma pergunta</li>
                                </ul>
                            }
                        />
                    </div>
                }
            />
        </div>
    )
}

export default PacienteJaCadastrado;