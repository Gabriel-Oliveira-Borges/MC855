import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import "./EditionPage.css";
import { getPage } from "../../../database/PageDB.js"
import EditionPageNav from "../../../components/editionPageNav/editionPageNav";
import EditionPageContent from "../../../components/editionPageContent/editionPageContent";


function EditionPage() {
	const [page, setPage] = useState(0)
	let props = useParams()
	let pageId = props.pageId
	
	useEffect(() => {
		getPage(pageId).then(p => {
			setPage(p)
		})
	}, [])

	const handleChange = (value) => {
		setPage({...page, body:value})
	}

	return (
		<div className="EditionPage">
            <EditionPageNav/>
            {page && <EditionPageContent page={page} handleChange={handleChange}/>}
		</div>
	)
}

export default EditionPage;