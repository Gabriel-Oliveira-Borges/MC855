class OrientationService{
    welcome(){
        console.log("Welcome Page")

        return {
            title:"Boas-vindas ao Ambulatório de Pediatria do HC Unicamp!",
			icon:"HEART",
            type: "OPTIONS-PAGE",
            options: [
                {
					link:"/cadastrado",
					image:"DOCTOR",
					description:"Já sou paciente do HC Unicamp"
                },
                {
                    link:"/novo",
                    image:"DOCTOR1",
					description:"É a minha primeira vez no Ambulatório do HC"
                }
            ]
        }
    }

    oldPatient() {
        console.log("Old Patient Page")

        return {
            title:"Já sou paciente do HC Unicamp",
			icon:"DOCTOR",
            type: "OPTIONS-PAGE",
            options: [
                {
					link:"/consultas",
					description:`
                        <p class='item-lista'>- Consulta agendada</p>
                        <p class='item-lista'>- Encaixe por e-mail</p>
                        <p class='item-lista'>- Agendar consulta hoje</p>
                    `
                },
                {
                    link:"/procedimentos",
					description:`
                        <p class='item-lista'>- Receber medicamento</p>
                        <p class='item-lista'>- Fazer teste ou curativo</p>
                        <p class='item-lista'>- Realizar outro procedimento</p>
                    `
                },
                {
                    link:"/atendimento",
					description:`
                        <p class='item-lista'>- Remarcar consulta</p>
                        <p class='item-lista'>- Pedir relatório, receita ou exames</p>
                        <p class='item-lista'>- Fazer uma pergunta</p>
                    `
                }
            ]
        }
    }
}


export default OrientationService