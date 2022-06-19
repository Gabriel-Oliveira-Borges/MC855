class OrientationService{
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