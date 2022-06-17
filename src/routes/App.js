import React from "react";
import Option from '../components/Option'
import TextButton from "../components/TextButton";
import doctor from '../images/doctor 1.png'
import './App.css'

const App = () => {
	return (
		<div className="app ui container">
			<Option
				className="link-option"
				link="/opa"
				image={doctor}
				description="Já sou paciente do HC Unicamp"
			/>
			<TextButton
				link="/especialidades"
				text="VER ESPECIALIDADES DO AMBULATÓRIO de pediatria"
			/>
		</div>
	)
}

export default App;
