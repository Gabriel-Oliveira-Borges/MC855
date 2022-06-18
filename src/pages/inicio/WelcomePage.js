import React from "react";
import BasicPage from '../../components/basicPage/BasicPage'
import TextButton from "../../components/textButton/TextButton";
import Option from '../../components/option/Option'
import ImageMap from '../../constants/images'
import "./WelcomePage.css";

function WelcomePage() {
	return (
		<div className="WelcomePage">
			<BasicPage 
				title="Boas-vindas ao Ambulatório de Pediatria do HC Unicamp!" 
				icon="HEART"
				content={
					<div className="WelcomePageContent">
						<Option
							className="link-option"
							link="/cadastrado"
							image={ImageMap["DOCTOR"]}
							description="Já sou paciente do HC Unicamp"
						/>
						<Option
							className="link-option"
							link="/opa"
							image={ImageMap["DOCTOR"]}
							description="É a minha primeira vez no Ambulatório do HC"
						/>
					</div>
				}	
				footer={
					<TextButton
						link="/especialidades"
						text="VER ESPECIALIDADES DO AMBULATÓRIO de pediatria"
					/>
				}
			></BasicPage>
		</div>
	)
}

export default WelcomePage;