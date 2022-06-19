class OrientationService{

    newPacient(){
        console.log("New Pacient Page")

        return {
            title: "É a minha primeira vez no Ambulatório do HC",
            icon: "DOCTOR1",
            type: "CONTENT-PAGE",
            body: `
                <p>Por favor, <b>dirija-se pela faixa amarela</b> para cadastrar seus dados.</p>
                <p><b>Seu nome</b> e <b>seu número HC</b> lhes serão entregues em uma pasta.</p>
                <p>Ao finalizar este passo, você terá uma <b>Consulta Agendada</b>!</p>
                <ul>
                <li>Esteja com o <b>seu número HC</b> à mão;</li>
                <li>Retire <b>uma senha</b> e aguarde na recepção;</li>
                <li><b>Sua senha</b> e a <b>sala onde acontecerá sua consulta</b> irão aparecer na tela da televisão acima da Porta do Ambulatório!</li>
                </ul>
            `
        }
    }

    welcome(){
        console.log("Welcome Page")

        return {
            title:"Boas-vindas ao Ambulatório de Pediatria do HC Unicamp!",
			icon:"HEART",
            type: "OPTIONS-PAGE",
            options: [
                {
					link:"/opa",
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
}


export default OrientationService