import React from "react";
import Option from '../components/Option'
import doctor from '../images/doctor 1.png'
import './App.css'

const App = () => {
	return (
		<div className="app">
			<Option
				className="link-option"
				link="/opa"
				image={doctor}
				description="Já sou paciente do HC Unicamp"
			/>
		</div>
	)
}

export default App;
