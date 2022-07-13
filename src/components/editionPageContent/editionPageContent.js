import React from "react";
import "./editionPageContent.css";
import Preview from '../preview/Preview'
import TextEditor from '../textEditor/TextEditor'
import { Link } from "react-router-dom";

function EditionPageContent({page, handleChange}) {

    function save(){
        console.log("Save...")
    }

	return (
		<div className="EditionPageContent">
            <div className="EditionPageContentTextEditor">
                <div className="EditionPageContentTextEditorBreadcrumb">
                    <Link className='link' to="/admin/inicio">
                        <i className="angle left icon"></i>
                        Voltar
                    </Link>
                </div>
                <div className="EditionPageContentTextEditorDescription">
                    <h2> Editar texto da tela “{page.title}” </h2>
                    <span>Aqui, você pode editar as instruções que constam nessa tela utilizando o campo de texto abaixo. Ao lado direito, existe uma pré-visualização de como esse texto ficará na tela do site – ou seja, como os pacientes do ambulatório verão essa informação ao entrar no site.</span>
                </div>
                <div className="EditionPageContentTextEditorEditor">
                    <TextEditor text={page.body} onChangeFn={handleChange}/>
                </div>
                <div className="EditionPageContentTextEditorButtons">
                    <button onClick={save}> Salvar </button>
                </div>
            </div>
            <div className="PreviewContainer">
                <Preview className="Preview" page={page}/>
            </div>
		</div>
	)
}

export default EditionPageContent;