import React from "react";
import Option from '../../components/option/Option'
import TextButton from "../../components/textButton/TextButton";
import PageHeader from "../../components/pageHeader/PageHeader";
import ImageMap from '../../constants/images'
import './App.css'

const App = () => {
	return (
		<div className="app ui container">
			<Option
				className="link-option"
				link="/opa"
				image={ImageMap["DOCTOR"]}
				description="Já sou paciente do HC Unicamp"
			/>
			<TextButton
				link="/especialidades"
				text="VER ESPECIALIDADES DO AMBULATÓRIO de pediatria"
			/>

			<PageHeader 
				title="Boas-vindas ao Ambulatório de Pediatria do HC Unicamp!" 
				icon="HEART"
			/>
		</div>
	)
}

export default App;
