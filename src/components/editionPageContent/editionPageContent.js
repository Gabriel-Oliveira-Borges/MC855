import React from "react";
import "./editionPageContent.css";
import Preview from '../preview/Preview'
import TextEditor from '../textEditor/TextEditor'
import SaveButton from "../saveButton/SaveButton";
import translations from "../../constants/translations";
import { Link } from "react-router-dom";
import { updatePageBody } from '../../database/PageDB'

function EditionPageContent({page, handleChange}) {

    function save(){
        console.log("Save...")
        Object.entries(page).filter(([key, value]) =>
            !key.includes('default') && !key.includes('icon') && !key.includes('page') && !key.includes('title')
        ).forEach(([key, value]) => {
            updatePageBody(page.page, key, value)
        })
    }

    const editedItems = (page) => {
        const edited = Object.entries(page).filter(([key, value]) =>
            !key.includes('default') && !key.includes('icon') && !key.includes('page') && !key.includes('title')
        )
        const sorter = Object.keys(translations)
        return sorter.filter(v => edited.map(a => a[0]).includes(v)).flatMap(v => edited.filter(([key, value]) => key === v))
            .map(([key, value]) => <TextEditor key={key} pageId={key} text={value} onChangeFn={handleChange}/>)
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
                <div className="EditionPageContentTextEditorButtons">
                    <SaveButton onClick={save} text='Salvar' />
                </div>
                <div className="EditionPageContentTextEditorEditor">
                    {editedItems(page)}
                </div>
            </div>
            <div className="PreviewContainer">
                <Preview className="Preview" page={page}/>
            </div>
		</div>
	)
}

export default EditionPageContent;